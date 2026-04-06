export const UNIT_FAMILIES = {
  dataSize: {
    bit: { toBase: (v) => v },
    byte: { toBase: (v) => v * 8 },
    KB: { toBase: (v) => v * 8 * 1024 },
    MB: { toBase: (v) => v * 8 * 1024 * 1024 },
  },
  dataRate: {
    bps: { toBase: (v) => v },
    Kbps: { toBase: (v) => v * 1e3 },
    Mbps: { toBase: (v) => v * 1e6 },
    Gbps: { toBase: (v) => v * 1e9 },
  },
  distance: {
    m: { toBase: (v) => v },
    km: { toBase: (v) => v * 1000 },
  },
  speed: {
    'm/s': { toBase: (v) => v },
    'km/s': { toBase: (v) => v * 1000 },
  },
  time: {
    s: { toBase: (v) => v },
    ms: { toBase: (v) => v / 1000 },
    us: { toBase: (v) => v / 1e6 },
  },
  frequency: {
    Hz: { toBase: (v) => v },
    KHz: { toBase: (v) => v * 1e3 },
    MHz: { toBase: (v) => v * 1e6 },
    GHz: { toBase: (v) => v * 1e9 },
  },
  ratio: {
    linear: { toBase: (v) => v },
    percent: { toBase: (v) => v / 100 },
    dB: { toBase: (v) => v },
  },
  count: { count: { toBase: (v) => v } },
}

export function getUnits(quantity) {
  const fam = UNIT_FAMILIES[quantity]
  return fam ? Object.keys(fam) : []
}

export function parseNumber(raw) {
  const cleaned = String(raw ?? '').trim()
  if (!cleaned) return { ok: false, value: NaN }
  const v = Number(cleaned)
  return { ok: Number.isFinite(v), value: v }
}

export function toBase(quantity, value, unit) {
  const fam = UNIT_FAMILIES[quantity]
  if (!fam || !fam[unit]) throw new Error(`Unknown unit "${unit}" for quantity "${quantity}"`)
  return fam[unit].toBase(value)
}

export function fromBase(quantity, value, unit) {
  if (quantity === 'time') {
    if (unit === 's') return value
    if (unit === 'ms') return value * 1000
    if (unit === 'us') return value * 1e6
  }
  if (quantity === 'dataRate') {
    if (unit === 'bps') return value
    if (unit === 'Kbps') return value / 1e3
    if (unit === 'Mbps') return value / 1e6
    if (unit === 'Gbps') return value / 1e9
  }
  if (quantity === 'frequency') {
    if (unit === 'Hz') return value
    if (unit === 'KHz') return value / 1e3
    if (unit === 'MHz') return value / 1e6
    if (unit === 'GHz') return value / 1e9
  }
  if (quantity === 'ratio') {
    if (unit === 'linear') return value
    if (unit === 'percent') return value * 100
    if (unit === 'dB') return value
  }
  return value
}

export function formatNumber(x, { maxSig = 6 } = {}) {
  if (!Number.isFinite(x)) return String(x)
  const ax = Math.abs(x)
  if (ax !== 0 && (ax >= 1e6 || ax < 1e-3)) return x.toExponential(Math.min(4, maxSig - 1))
  return x.toLocaleString(undefined, { maximumSignificantDigits: maxSig })
}
