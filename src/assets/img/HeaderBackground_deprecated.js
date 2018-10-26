import React from 'react'

const SvgComponent = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="320 0 321 300"
    width="100%"
    height="100%"
    {...props}
  >
    <defs>
      <path
        d="M0 0h640.01c2.73 23.17 2.73 36.48 0 39.91-1.68 2.11-6.72 8.94-15.11 20.47a331.356 331.356 0 0 1-157.68 117.5c-13.77 4.86 15.8-5.57-4.52 1.59a233.317 233.317 0 0 1-130.77 7.15c-25.75-6.02-12.41-2.9-32.12-7.51a290.545 290.545 0 0 0-186.91 18.6c-13.37 6.11 12.9-5.89-6.44 2.94a211.425 211.425 0 0 0-94.22 84.8c-1.64 2.76-5.71 9.67-12.24 20.72V0z"
        id="a"
      />
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1={-310.35}
        y1={238.14}
        x2={880.93}
        y2={-39.99}
      >
        <stop offset="0%" stopColor="#4d2dff" />
        <stop offset="100%" stopColor="#c000ff" />
      </linearGradient>
    </defs>
    <use xlinkHref="#a" fill="url(#b)" />
  </svg>
)

export default SvgComponent
