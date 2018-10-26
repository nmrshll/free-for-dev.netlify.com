import React from 'react'

// const Gradient = (
//   <linearGradient
//     id="b"
//     gradientUnits="userSpaceOnUse"
//     x1={-178.85}
//     y1={413.33}
//     x2={855}
//     y2={-121.25}
//   >
//     <stop offset="0%" stopColor="hsl(240, 50%, 50%)" />
//     <stop offset="50%" stopColor="hsl(254, 50%, 50%)" />
//     <stop offset="100%" stopColor="hsl(260, 50%, 50%)" />
//   </linearGradient>
// )

const SvgComponent = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 640"
    {...props}
    preserveAspectRatio="none"
  >
    <defs>
      <path
        d="M0 470.16C85.18 382.69 290.62 640 408.65 640c78.68 0 155.79-102.76 231.35-308.3V0H0v470.16z"
        id="a"
      />
      <linearGradient
        id="gradient"
        gradientUnits="userSpaceOnUse"
        x1={-178.85}
        y1={413.33}
        x2={855}
        y2={-121.25}
      >
        <stop offset="0%" stopColor="#5800f2" />
        <stop offset="50%" stopColor="hsl(254, 50%, 50%)" />
        <stop offset="100%" stopColor="#b100f6" />
      </linearGradient>
      <path
        d="M0 515.27c85.18-87.47 290.62 94.84 408.65 94.84 78.68.01 155.79-80.71 231.35-242.14V0H0v515.27z"
        id="d"
      />
      <linearGradient
        id="e"
        gradientUnits="userSpaceOnUse"
        x1={-178.85}
        y1={394.03}
        x2={855}
        y2={-115.59}
      >
        <stop offset="0%" stopColor="#5800f2" />
        <stop offset="100%" stopColor="#b100f6" />
      </linearGradient>
      <path
        d="M0 485.99c85.18-87.47 350.34 95.01 468.36 95.02 78.68 0 135.89-53.37 171.64-160.1V0H0v485.99z"
        id="f"
      />
      <linearGradient
        id="g"
        gradientUnits="userSpaceOnUse"
        x1={-178.85}
        y1={375.23}
        x2={855}
        y2={-110.07}
      >
        <stop offset="0%" stopColor="#5800f2" />
        <stop offset="100%" stopColor="#b100f6" />
      </linearGradient>
    </defs>
    <use xlinkHref="#a" opacity={0.64} fill="url(#gradient)" />
    <use xlinkHref="#d" opacity={0.54} fill="url(#gradient)" />
    <use xlinkHref="#f" opacity={0.66} fill="url(#gradient)" />
  </svg>
)
// <use xlinkHref="#c" fillOpacity={0} stroke="#000" />

export default SvgComponent
