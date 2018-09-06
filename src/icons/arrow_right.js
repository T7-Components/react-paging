import React from 'react'

const ArrowRightIcon = props => {
  const {
    color = '#000',
    title = 'arrow right icon',
    description = 'arrow right icon',
    className
  } = props

  return (
    <svg
      width="7"
      height="11"
      viewBox="0 0 7 11"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <desc>{description}</desc>
      <path
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 1l4.5 4.5L1 10"
      />
    </svg>
  )
}

export default ArrowRightIcon
