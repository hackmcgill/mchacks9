import React from "react"

const SvgBackground = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width={100} height={100}>
    <rect width={100} height={100} fill='#269' />
    <g fill='#6494b7'>
      <rect width={100} height={1} y={20} />
      <rect width={100} height={1} y={40} />
      <rect width={100} height={1} y={60} />
      <rect width={100} height={1} y={80} />
      <rect width={1} height={100} x={20} />
      <rect width={1} height={100} x={40} />
      <rect width={1} height={100} x={60} />
      <rect width={1} height={100} x={80} />
    </g>
    <rect
      width={100}
      height={100}
      fill='none'
      strokeWidth={2}
      stroke='#fff'
    />
  </svg>
)

export default SvgBackground
