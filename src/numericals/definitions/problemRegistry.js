export const TOPICS = [
  { id: 'delay', title: 'Delay & Networking Basics' },
  { id: 'throughput', title: 'Data & Throughput' },
  { id: 'switching', title: 'Packet Switching' },
  { id: 'capacity', title: 'Bandwidth & Capacity' },
  { id: 'signal', title: 'Signal & Noise' },
  { id: 'misc', title: 'Misc' },
]

export const PROBLEMS = [
  {
    id: 'transmission_delay',
    topic: 'delay',
    title: 'Transmission Delay (Td)',
    description: 'Time to push L bits onto a link of rate R.',
    inputs: [
      { key: 'L', label: 'Packet size (L)', quantity: 'dataSize', required: true, defaultUnit: 'byte', defaultValue: '1500', min: 0 },
      { key: 'R', label: 'Link rate (R)', quantity: 'dataRate', required: true, defaultUnit: 'Mbps', defaultValue: '10', min: 0 },
    ],
    result: { quantity: 'time', unit: 'ms' },
    formula: { quick: 'Td = L / R' },
  },
  {
    id: 'propagation_delay',
    topic: 'delay',
    title: 'Propagation Delay (Tp)',
    description: 'Time for signal to travel distance d at speed s.',
    inputs: [
      { key: 'd', label: 'Distance (d)', quantity: 'distance', required: true, defaultUnit: 'km', defaultValue: '100', min: 0 },
      { key: 's', label: 'Propagation speed (s)', quantity: 'speed', required: true, defaultUnit: 'm/s', defaultValue: '200000000', min: 0 },
    ],
    result: { quantity: 'time', unit: 'ms' },
    formula: { quick: 'Tp = d / s' },
  },
  {
    id: 'total_delay',
    topic: 'delay',
    title: 'Total Delay (Transmission + Propagation)',
    description: 'Adds transmission and propagation delay for a single link.',
    inputs: [
      { key: 'L', label: 'Packet size (L)', quantity: 'dataSize', required: true, defaultUnit: 'byte', defaultValue: '1500', min: 0 },
      { key: 'R', label: 'Link rate (R)', quantity: 'dataRate', required: true, defaultUnit: 'Mbps', defaultValue: '10', min: 0 },
      { key: 'd', label: 'Distance (d)', quantity: 'distance', required: true, defaultUnit: 'km', defaultValue: '100', min: 0 },
      { key: 's', label: 'Propagation speed (s)', quantity: 'speed', required: true, defaultUnit: 'm/s', defaultValue: '200000000', min: 0 },
    ],
    result: { quantity: 'time', unit: 'ms' },
    formula: { quick: 'T = (L/R) + (d/s)' },
  },
  {
    id: 'effective_throughput_with_loss',
    topic: 'throughput',
    title: 'Effective Throughput (with loss)',
    description: 'Throughput adjusted by (1 - lossRate).',
    inputs: [
      { key: 'R', label: 'Link throughput (R)', quantity: 'dataRate', required: true, defaultUnit: 'Mbps', defaultValue: '10', min: 0 },
      { key: 'loss', label: 'Loss rate', quantity: 'ratio', required: true, defaultUnit: 'percent', defaultValue: '1', min: 0, max: 100 },
    ],
    result: { quantity: 'dataRate', unit: 'Mbps' },
    formula: { quick: 'Reff = R × (1 - loss)' },
  },
  {
    id: 'goodput',
    topic: 'throughput',
    title: 'Goodput',
    description: 'Application payload rate excluding headers.',
    inputs: [
      { key: 'R', label: 'Throughput (R)', quantity: 'dataRate', required: true, defaultUnit: 'Mbps', defaultValue: '10', min: 0 },
      { key: 'payload', label: 'Payload fraction', quantity: 'ratio', required: true, defaultUnit: 'percent', defaultValue: '90', min: 0, max: 100 },
    ],
    result: { quantity: 'dataRate', unit: 'Mbps' },
    formula: { quick: 'Goodput = R × payload%' },
  },
  {
    id: 'shannon_capacity',
    topic: 'capacity',
    title: 'Shannon Capacity',
    description: 'C = B log2(1 + SNR).',
    inputs: [
      { key: 'B', label: 'Bandwidth (B)', quantity: 'frequency', required: true, defaultUnit: 'MHz', defaultValue: '1', min: 0 },
      { key: 'snr', label: 'SNR (linear)', quantity: 'ratio', required: true, defaultUnit: 'linear', defaultValue: '10', min: 0 },
    ],
    result: { quantity: 'dataRate', unit: 'Mbps' },
    formula: { quick: 'C = B log2(1+SNR)' },
  },
]

export function problemsByTopic() {
  const map = new Map()
  for (const t of TOPICS) map.set(t.id, [])
  for (const p of PROBLEMS) {
    if (!map.has(p.topic)) map.set(p.topic, [])
    map.get(p.topic).push(p)
  }
  return map
}
