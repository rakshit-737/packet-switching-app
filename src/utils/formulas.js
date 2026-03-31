export const formulas = {
  delay: {
    title: 'End-to-End Delay',
    formula: 'T_d = T_transmission + T_propagation',
    description: 'Total time for data to travel from source to destination',
    components: [
      'T_transmission = L / R (packet size in bits / bandwidth)',
      'T_propagation = d / s (distance / propagation speed)',
    ],
  },
  throughput: {
    title: 'Throughput',
    formula: 'Throughput = Bandwidth × (1 - Loss Rate)',
    description: 'Actual data transmission rate considering packet loss',
    components: [
      'Loss Rate = Packets Lost / Total Packets',
      'Affected by congestion and link capacity',
    ],
  },
  snr: {
    title: 'Signal-to-Noise Ratio',
    formula: 'SNR_dB = 10 × log₁₀(P_signal / P_noise)',
    description: 'Ratio of desired signal to background noise',
    components: [
      'Higher SNR = better signal quality',
      'Shannon Capacity = log₂(1 + SNR)',
    ],
  },
  bandwidth: {
    title: 'Bandwidth',
    formula: 'C = B × log₂(1 + SNR)',
    description: 'Shannon channel capacity formula',
    components: [
      'B = bandwidth in Hz',
      'SNR = signal-to-noise ratio (linear)',
    ],
  },
  circuitSwitching: {
    title: 'Circuit Switching',
    characteristics: [
      'Dedicated connection established before data transmission',
      'Resources reserved for entire duration',
      'Guaranteed bandwidth and low latency',
      'Setup and teardown delays',
      'Suitable for real-time traffic (voice, video)',
      'Less efficient for bursty data',
    ],
  },
  packetSwitching: {
    title: 'Packet Switching',
    characteristics: [
      'Data divided into packets with headers',
      'Each packet routed independently',
      'Resources shared dynamically',
      'Variable latency',
      'Better for bursty traffic',
      'More efficient overall network utilization',
      'Packets may arrive out of order',
    ],
  },
}

export const networkConcepts = [
  {
    id: 1,
    title: 'Circuit Switching',
    description: 'Dedicated connection model used in traditional telephone networks',
    details: [
      'Establishes dedicated end-to-end connection',
      'Resources reserved for entire call duration',
      'Guaranteed bandwidth',
      'Low and predictable latency',
      'Setup and teardown overhead',
      'Inefficient for data traffic',
    ],
    examples: ['Traditional phone networks', 'ISDN', 'Video conferencing'],
  },
  {
    id: 2,
    title: 'Packet Switching',
    description: 'Data is divided into packets routed independently',
    details: [
      'Connectionless or connection-oriented',
      'Packets include addressing and sequencing',
      'Dynamic resource allocation',
      'Better bandwidth utilization',
      'Variable latency',
      'Scalable architecture',
    ],
    examples: ['Internet (TCP/IP)', 'Ethernet', 'Frame Relay'],
  },
  {
    id: 3,
    title: 'Message Switching',
    description: 'Store-and-forward approach for entire messages',
    details: [
      'Messages stored at intermediate nodes',
      'Forwarded when full message received',
      'High latency',
      'Requires large storage',
      'Error checking per message',
      'Used in email, SMS',
    ],
    examples: ['Email systems', 'SMS networks', 'Historical telegraph'],
  },
  {
    id: 4,
    title: 'Multiplexing',
    description: 'Technique to combine multiple signals over single medium',
    details: [
      'Frequency Division Multiplexing (FDM)',
      'Time Division Multiplexing (TDM)',
      'Code Division Multiplexing (CDM)',
      'Wavelength Division Multiplexing (WDM)',
      'Increases link utilization',
      'Reduces cost',
    ],
    examples: ['Telephone networks', 'Radio broadcasting', 'Fiber optics'],
  },
]
