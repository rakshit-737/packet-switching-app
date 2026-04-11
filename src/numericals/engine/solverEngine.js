import { fromBase, formatNumber, parseNumber, toBase } from './unitConverter'
import { PROBLEMS } from '../definitions/problemRegistry'

function requireFinite(name, v) {
  if (!Number.isFinite(v)) throw new Error(`Invalid value for ${name}`)
  return v
}

export function solve(problemId, rawInputs) {
  const problem = PROBLEMS.find((p) => p.id === problemId)
  if (!problem) throw new Error('Unknown problem')

  const given = {}
  const steps = []

  for (const input of problem.inputs) {
    const raw = rawInputs[input.key]
    const { ok, value } = parseNumber(raw?.value)
    if (!ok) throw new Error(`Enter a valid number for "${input.label}"`)
    const unit = raw?.unit || input.defaultUnit
    const base = toBase(input.quantity, value, unit)
    given[input.key] = { value, unit, base, quantity: input.quantity }
  }

  steps.push({
    title: 'Given values & unit normalization',
    lines: Object.entries(given).map(([k, g]) => `${k}: ${formatNumber(g.value)} ${g.unit} → ${formatNumber(g.base)} (base)`),
  })

  let baseResult = NaN
  const lines = []
  let interpretation = ''

  const pick = (k) => requireFinite(k, given[k]?.base)

  // ── DELAY ─────────────────────────────────────────────────────────────────
  if (problemId === 'transmission_delay') {
    const L = pick('L')
    const R = pick('R')
    lines.push('Formula: Td = L / R')
    lines.push(`Substitute: Td = ${formatNumber(L)} bits / ${formatNumber(R)} bps`)
    baseResult = L / R
    interpretation = `A transmission delay of ${formatNumber(fromBase('time', baseResult, 'ms'))} ms means it takes that long to push all packet bits onto the wire.`

  } else if (problemId === 'propagation_delay') {
    const d = pick('d')
    const s = pick('s')
    lines.push('Formula: Tp = d / s')
    lines.push(`Substitute: Tp = ${formatNumber(d)} m / ${formatNumber(s)} m/s`)
    baseResult = d / s
    interpretation = `A propagation delay of ${formatNumber(fromBase('time', baseResult, 'ms'))} ms means the signal takes that long to travel the full distance.`

  } else if (problemId === 'total_delay') {
    const L = pick('L')
    const R = pick('R')
    const d = pick('d')
    const s = pick('s')
    const Td = L / R
    const Tp = d / s
    lines.push('Formula: T = (L/R) + (d/s)')
    lines.push(`Td = ${formatNumber(L)} / ${formatNumber(R)} = ${formatNumber(Td)} s`)
    lines.push(`Tp = ${formatNumber(d)} / ${formatNumber(s)} = ${formatNumber(Tp)} s`)
    lines.push(`T = ${formatNumber(Td)} + ${formatNumber(Tp)}`)
    baseResult = Td + Tp
    interpretation = `Total single-link delay is ${formatNumber(fromBase('time', baseResult, 'ms'))} ms (Td=${formatNumber(Td * 1000)} ms + Tp=${formatNumber(Tp * 1000)} ms).`

  } else if (problemId === 'end_to_end_delay') {
    const L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s'), N = pick('N')
    const Td = L / R, Tp = d / s
    lines.push('Formula: T = N×(L/R) + (d/s)')
    lines.push(`Td = L/R = ${formatNumber(L)} / ${formatNumber(R)} = ${formatNumber(Td)} s`)
    lines.push(`Tp = d/s = ${formatNumber(d)} / ${formatNumber(s)} = ${formatNumber(Tp)} s`)
    lines.push(`T = ${formatNumber(N)} × ${formatNumber(Td)} + ${formatNumber(Tp)} = ${formatNumber(N * Td + Tp)} s`)
    baseResult = N * Td + Tp
    interpretation = `End-to-end delay across ${formatNumber(N)} hops is ${formatNumber(fromBase('time', baseResult, 'ms'))} ms.`

  } else if (problemId === 'store_forward_delay') {
    const L = pick('L'), R = pick('R'), N = pick('N')
    const Td = L / R
    lines.push('Formula: T = N × (L/R)')
    lines.push(`Td (per link) = ${formatNumber(L)} / ${formatNumber(R)} = ${formatNumber(Td)} s`)
    lines.push(`T = ${formatNumber(N)} × ${formatNumber(Td)} = ${formatNumber(N * Td)} s`)
    baseResult = N * Td
    interpretation = `Store-and-forward delay across ${formatNumber(N)} links is ${formatNumber(fromBase('time', baseResult, 'ms'))} ms.`

  // ── THROUGHPUT ─────────────────────────────────────────────────────────────
  } else if (problemId === 'effective_throughput_with_loss') {
    const R = pick('R')
    const loss = pick('loss')
    lines.push('Formula: Reff = R × (1 - loss)')
    lines.push(`Reff = ${formatNumber(R)} × (1 - ${formatNumber(loss)}) = ${formatNumber(R * (1 - loss))} bps`)
    baseResult = R * (1 - loss)
    interpretation = `Effective throughput is ${formatNumber(fromBase('dataRate', baseResult, 'Mbps'))} Mbps after ${formatNumber(loss * 100)}% packet loss.`

  } else if (problemId === 'goodput') {
    const R = pick('R')
    const payload = pick('payload')
    lines.push('Formula: Goodput = R × payloadFraction')
    lines.push(`Goodput = ${formatNumber(R)} × ${formatNumber(payload)} = ${formatNumber(R * payload)} bps`)
    baseResult = R * payload
    interpretation = `Goodput is ${formatNumber(fromBase('dataRate', baseResult, 'Mbps'))} Mbps of useful application data.`

  } else if (problemId === 'link_utilization') {
    const arr = pick('arrival_rate'), cap = pick('link_capacity')
    if (cap === 0) throw new Error('Link capacity cannot be zero')
    lines.push('Formula: U = arrival_rate / link_capacity')
    lines.push(`U = ${formatNumber(arr)} / ${formatNumber(cap)} = ${formatNumber(arr / cap)}`)
    lines.push(`U% = ${formatNumber((arr / cap) * 100)}%`)
    baseResult = arr / cap
    interpretation = `Link utilization is ${formatNumber(baseResult * 100)}%. ${baseResult > 0.8 ? 'Queuing delay may be significant above 80%.' : 'Utilization is at a healthy level.'}`

  } else if (problemId === 'bandwidth_delay_product') {
    const R = pick('R'), RTT = pick('RTT')
    lines.push('Formula: BDP = R × RTT')
    lines.push(`BDP = ${formatNumber(R)} bps × ${formatNumber(RTT)} s = ${formatNumber(R * RTT)} bits`)
    baseResult = R * RTT
    interpretation = `The BDP is ${formatNumber(baseResult)} bits — the pipe needs to hold this many bits in flight for full utilization.`

  } else if (problemId === 'max_throughput_constraints') {
    const R = pick('R'), W = pick('W'), L = pick('L'), d = pick('d'), s = pick('s'), loss = pick('loss')
    const Td = L / R, Tp = d / s, a = Tp / Td, RTT = 2 * Tp
    lines.push('Formula: Td=L/R, Tp=d/s, a=Tp/Td, RTT=2×Tp')
    lines.push(`Td = ${formatNumber(Td)} s, Tp = ${formatNumber(Tp)} s, a = ${formatNumber(a)}, RTT = ${formatNumber(RTT)} s`)
    if (W * Td >= RTT) {
      baseResult = R * (1 - loss)
      lines.push(`W×Td = ${formatNumber(W * Td)} s ≥ RTT = ${formatNumber(RTT)} s  →  bandwidth-limited`)
      lines.push(`Tmax = R×(1-loss) = ${formatNumber(R)} × ${formatNumber(1 - loss)} = ${formatNumber(baseResult)} bps`)
    } else {
      baseResult = (W * R / (1 + 2 * a)) * (1 - loss)
      lines.push(`W×Td = ${formatNumber(W * Td)} s < RTT = ${formatNumber(RTT)} s  →  window-limited`)
      lines.push(`Tmax = W×R/(1+2a)×(1-loss) = ${formatNumber(W)}×${formatNumber(R)}/(${formatNumber(1 + 2 * a)})×${formatNumber(1 - loss)} = ${formatNumber(baseResult)} bps`)
    }
    interpretation = `Maximum effective throughput is ${formatNumber(fromBase('dataRate', baseResult, 'Mbps'))} Mbps.`

  // ── SWITCHING ──────────────────────────────────────────────────────────────
  } else if (problemId === 'num_packets_required') {
    const M = pick('M'), L = pick('L'), H = pick('H')
    const payload = L - H
    if (payload <= 0) throw new Error('Header size must be smaller than packet size')
    const N = Math.ceil(M / payload)
    lines.push('Formula: N = ⌈M / (L − H)⌉')
    lines.push(`Payload per packet = L − H = ${formatNumber(L)} − ${formatNumber(H)} = ${formatNumber(payload)} bits`)
    lines.push(`N = ⌈${formatNumber(M)} / ${formatNumber(payload)}⌉ = ${N}`)
    baseResult = N
    interpretation = `${N} packet${N !== 1 ? 's are' : ' is'} required to carry the ${formatNumber(given['M'].value)} ${given['M'].unit} message.`

  } else if (problemId === 'time_send_message') {
    const M = pick('M'), L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s')
    const N_pkts = Math.ceil(M / L)
    const Td = L / R, Tp = d / s
    lines.push('Formula: T = ⌈M/L⌉ × (L/R) + (d/s)')
    lines.push(`N_pkts = ⌈${formatNumber(M)} / ${formatNumber(L)}⌉ = ${N_pkts}`)
    lines.push(`Td per packet = ${formatNumber(Td)} s, Tp = ${formatNumber(Tp)} s`)
    lines.push(`T = ${N_pkts} × ${formatNumber(Td)} + ${formatNumber(Tp)} = ${formatNumber(N_pkts * Td + Tp)} s`)
    baseResult = N_pkts * Td + Tp
    interpretation = `Sending the full message takes ${formatNumber(fromBase('time', baseResult, 'ms'))} ms across ${N_pkts} packet${N_pkts !== 1 ? 's' : ''}.`

  } else if (problemId === 'circuit_vs_packet') {
    const M = pick('M'), L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s')
    const setup = pick('setup_time'), N_links = pick('N_links')
    const circuit_time = setup + M / R + N_links * (d / s)
    const N_pkts = Math.ceil(M / L)
    const packet_time = N_pkts * (L / R) + N_links * (d / s)
    lines.push('── Circuit switching ──')
    lines.push('Formula: T_c = setup + M/R + N×(d/s)')
    lines.push(`T_c = ${formatNumber(setup)} + ${formatNumber(M / R)} + ${formatNumber(N_links * (d / s))} = ${formatNumber(circuit_time)} s`)
    lines.push('')
    lines.push('── Packet switching ──')
    lines.push('Formula: T_p = ⌈M/L⌉×(L/R) + N×(d/s)')
    lines.push(`N_pkts = ⌈${formatNumber(M)}/${formatNumber(L)}⌉ = ${N_pkts}`)
    lines.push(`T_p = ${N_pkts}×${formatNumber(L / R)} + ${formatNumber(N_links * (d / s))} = ${formatNumber(packet_time)} s`)
    lines.push('')
    lines.push(packet_time < circuit_time
      ? `✓ Packet switching is faster by ${formatNumber(circuit_time - packet_time)} s`
      : `✓ Circuit switching is faster by ${formatNumber(packet_time - circuit_time)} s`)
    baseResult = packet_time
    interpretation = `Circuit: ${formatNumber(circuit_time)} s vs Packet: ${formatNumber(packet_time)} s. ${packet_time < circuit_time ? 'Packet switching wins.' : 'Circuit switching wins.'}`

  } else if (problemId === 'pipelining_delay') {
    const M = pick('M'), L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s'), N_hops = pick('N_hops')
    const N_pkts = Math.ceil(M / L)
    const Td = L / R, Tp = d / s
    lines.push('Formula: T = (N_hops + N_pkts − 1)×(L/R) + N_hops×(d/s)')
    lines.push(`N_pkts = ⌈${formatNumber(M)}/${formatNumber(L)}⌉ = ${N_pkts}`)
    lines.push(`Td = L/R = ${formatNumber(Td)} s, Tp per hop = ${formatNumber(Tp)} s`)
    lines.push(`T = (${formatNumber(N_hops)} + ${N_pkts} − 1)×${formatNumber(Td)} + ${formatNumber(N_hops)}×${formatNumber(Tp)}`)
    baseResult = (N_hops + N_pkts - 1) * Td + N_hops * Tp
    lines.push(`T = ${formatNumber(baseResult)} s`)
    interpretation = `Pipelined delivery of ${N_pkts} packet${N_pkts !== 1 ? 's' : ''} across ${formatNumber(N_hops)} hops takes ${formatNumber(fromBase('time', baseResult, 'ms'))} ms.`

  } else if (problemId === 'fragmentation') {
    const M = pick('M'), L = pick('L'), H = pick('H')
    const N_frags = Math.ceil(M / L)
    const overhead = N_frags * H
    lines.push('Formula: N_frags = ⌈M/L⌉,  overhead = N_frags × H')
    lines.push(`N_frags = ⌈${formatNumber(M)} / ${formatNumber(L)}⌉ = ${N_frags}`)
    lines.push(`Total header overhead = ${N_frags} × ${formatNumber(H)} = ${formatNumber(overhead)} bits`)
    lines.push(`Total data transmitted = ${formatNumber(N_frags * L + overhead)} bits`)
    baseResult = N_frags
    interpretation = `The datagram is split into ${N_frags} fragment${N_frags !== 1 ? 's' : ''} with ${formatNumber(overhead)} bits of header overhead.`

  // ── CAPACITY ───────────────────────────────────────────────────────────────
  } else if (problemId === 'shannon_capacity') {
    const B = pick('B')
    const snr = pick('snr')
    lines.push('Formula: C = B log₂(1 + SNR)')
    lines.push(`C = ${formatNumber(B)} × log₂(1 + ${formatNumber(snr)})`)
    lines.push(`  = ${formatNumber(B)} × ${formatNumber(Math.log2(1 + snr))}`)
    baseResult = B * Math.log2(1 + snr)
    interpretation = `Shannon capacity is ${formatNumber(fromBase('dataRate', baseResult, 'Mbps'))} Mbps — the theoretical maximum for this channel.`

  } else if (problemId === 'traffic_intensity') {
    const lambda = pick('lambda'), L = pick('L'), R = pick('R')
    lines.push('Formula: ρ = λ × L / R')
    lines.push(`ρ = ${formatNumber(lambda)} pkt/s × ${formatNumber(L)} bits/pkt / ${formatNumber(R)} bps`)
    baseResult = (lambda * L) / R
    lines.push(`ρ = ${formatNumber(baseResult)}`)
    if (baseResult >= 1) lines.push('⚠ ρ ≥ 1: queue is unstable — packets will accumulate indefinitely!')
    else lines.push(`Queue is stable (ρ = ${formatNumber(baseResult)} < 1)`)
    interpretation = `Traffic intensity ρ = ${formatNumber(baseResult)}. ${baseResult >= 1 ? 'Queue is unstable.' : 'Queue is stable.'}`

  } else if (problemId === 'buffer_overflow') {
    const buf = pick('buffer_size'), arr = pick('arrival_rate'), svc = pick('service_rate')
    lines.push('Formula: T_overflow = buffer / (arrival − service)  [only if arrival > service]')
    lines.push(`Arrival rate = ${formatNumber(arr)} bps, Service rate = ${formatNumber(svc)} bps`)
    if (arr <= svc) {
      lines.push('Arrival rate ≤ service rate: buffer will NOT overflow (excess traffic is handled)')
      baseResult = Infinity
      interpretation = 'Arrival rate does not exceed service rate — buffer overflow will not occur.'
    } else {
      const excess = arr - svc
      baseResult = buf / excess
      lines.push(`Excess rate = ${formatNumber(arr)} − ${formatNumber(svc)} = ${formatNumber(excess)} bps`)
      lines.push(`T_overflow = ${formatNumber(buf)} bits / ${formatNumber(excess)} bps = ${formatNumber(baseResult)} s`)
      interpretation = `Buffer overflows in ${formatNumber(baseResult)} s at the current excess arrival rate.`
    }

  // ── PROTOCOL ───────────────────────────────────────────────────────────────
  } else if (problemId === 'stop_wait_efficiency') {
    const L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s')
    const Td = L / R, Tp = d / s
    lines.push('Formula: η = Td / (Td + 2×Tp)')
    lines.push(`Td = L/R = ${formatNumber(L)} / ${formatNumber(R)} = ${formatNumber(Td)} s`)
    lines.push(`Tp = d/s = ${formatNumber(d)} / ${formatNumber(s)} = ${formatNumber(Tp)} s`)
    lines.push(`η = ${formatNumber(Td)} / (${formatNumber(Td)} + 2×${formatNumber(Tp)})`)
    baseResult = Td / (Td + 2 * Tp)
    lines.push(`η = ${formatNumber(baseResult * 100)}%`)
    interpretation = `Stop-and-Wait efficiency is ${formatNumber(baseResult * 100)}% — the sender is idle ${formatNumber((1 - baseResult) * 100)}% of the time.`

  } else if (problemId === 'sliding_window_throughput') {
    const W = pick('W'), L = pick('L'), R = pick('R'), d = pick('d'), s = pick('s')
    const Td = L / R, Tp = d / s, a = Tp / Td
    lines.push('Formula: a = Tp/Td; η = min(W, 1+2a) / (1+2a)')
    lines.push(`Td = ${formatNumber(Td)} s, Tp = ${formatNumber(Tp)} s, a = ${formatNumber(a)}`)
    lines.push(`1 + 2a = ${formatNumber(1 + 2 * a)}`)
    let eff
    if (W >= 1 + 2 * a) {
      eff = 1
      lines.push(`W = ${formatNumber(W)} ≥ 1+2a = ${formatNumber(1 + 2 * a)}  →  η = 100% (pipe is full)`)
    } else {
      eff = W / (1 + 2 * a)
      lines.push(`W = ${formatNumber(W)} < 1+2a = ${formatNumber(1 + 2 * a)}  →  η = ${formatNumber(W)}/${formatNumber(1 + 2 * a)} = ${formatNumber(eff * 100)}%`)
    }
    baseResult = eff
    interpretation = `Sliding window efficiency is ${formatNumber(eff * 100)}%. ${eff < 1 ? `Increase W to ≥ ${Math.ceil(1 + 2 * a)} for 100% efficiency.` : 'Window fully utilizes the link.'}`

  } else if (problemId === 'rtt_calculation') {
    const d = pick('d'), s = pick('s'), proc = pick('proc_delay')
    const one_way = d / s
    lines.push('Formula: RTT = 2×(d/s) + proc_delay')
    lines.push(`One-way propagation = d/s = ${formatNumber(d)} / ${formatNumber(s)} = ${formatNumber(one_way)} s`)
    lines.push(`RTT = 2×${formatNumber(one_way)} + ${formatNumber(proc)} = ${formatNumber(2 * one_way + proc)} s`)
    baseResult = 2 * one_way + proc
    interpretation = `RTT is ${formatNumber(fromBase('time', baseResult, 'ms'))} ms — the minimum time to send a packet and receive its ACK.`

  // ── MISC ───────────────────────────────────────────────────────────────────
  } else if (problemId === 'queuing_delay_mm1') {
    const lambda = pick('lambda'), mu = pick('mu')
    if (lambda >= mu) throw new Error('System unstable: arrival rate λ must be less than service rate μ')
    const rho = lambda / mu
    lines.push('Formula: Wq = λ / (μ×(μ−λ))')
    lines.push(`ρ = λ/μ = ${formatNumber(lambda)} / ${formatNumber(mu)} = ${formatNumber(rho)}`)
    baseResult = lambda / (mu * (mu - lambda))
    lines.push(`Wq = ${formatNumber(lambda)} / (${formatNumber(mu)} × (${formatNumber(mu)} − ${formatNumber(lambda)})) = ${formatNumber(baseResult)} s`)
    interpretation = `Average queuing wait is ${formatNumber(baseResult * 1000)} ms (ρ = ${formatNumber(rho)}).`

  } else if (problemId === 'packet_loss_impact') {
    const N_total = pick('N_total'), loss_rate = pick('loss_rate')
    const N_lost = N_total * loss_rate
    const N_received = N_total * (1 - loss_rate)
    lines.push('Formula: N_received = N_total × (1 − loss_rate)')
    lines.push(`N_lost = ${formatNumber(N_total)} × ${formatNumber(loss_rate)} = ${formatNumber(N_lost)}`)
    lines.push(`N_received = ${formatNumber(N_total)} × ${formatNumber(1 - loss_rate)} = ${formatNumber(N_received)}`)
    baseResult = N_received
    interpretation = `Of ${formatNumber(N_total)} packets sent, ${formatNumber(N_received)} are received and ${formatNumber(N_lost)} are lost.`

  } else if (problemId === 'reassembly_time') {
    const N = pick('N'), L = pick('L'), R = pick('R')
    lines.push('Formula: T = N × (L/R)')
    lines.push(`T = ${formatNumber(N)} × (${formatNumber(L)} / ${formatNumber(R)}) = ${formatNumber(N * L / R)} s`)
    baseResult = N * L / R
    interpretation = `Reassembly takes ${formatNumber(fromBase('time', baseResult, 'ms'))} ms to receive all ${formatNumber(N)} packets.`

  } else {
    throw new Error('Solver not implemented yet')
  }

  steps.push({ title: 'Solve', lines })

  const outQ = problem.result.quantity
  const outUnit = problem.result.unit
  const displayValue = fromBase(outQ, baseResult, outUnit)

  const final = { value: displayValue, unit: outUnit, baseValue: baseResult }

  steps.push({ title: 'Final answer', lines: [`Answer: ${formatNumber(final.value)} ${final.unit}`] })

  return {
    problem,
    given,
    steps,
    final,
    interpretation,
    tips: problem.tips || [],
    relatedProblems: problem.relatedIds || [],
    quickReference: [{ title: 'Formula', value: problem.formula?.quick || '' }].filter((x) => x.value),
  }
}
