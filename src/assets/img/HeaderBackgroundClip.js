import React from 'react'

const SvgComponent = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 640"
    {...props}
    preserveAspectRatio="none"
  >
    <defs>
      <path
        d="M0 384.86c69.75-70.03 187.43-52.18 233.28 35.37 89.21 170.31 158.29 238.18 207.22 203.6C523.71 565.03 590.21 357.09 640 0v640H0V384.86z"
        id="a"
      />
    </defs>
    <use xlinkHref="#a" fill="#fff" />
    <use xlinkHref="#a" fillOpacity={0} stroke="#000" strokeOpacity={0} />
    <g>
      <use xlinkHref="#b" fillOpacity={0} stroke="#000" />
    </g>
  </svg>
)

export default SvgComponent
