import React from 'react'
import { Icon } from './Icon'

export const MinusAlt = props => (
  <Icon a11yTitle="MinusAlt" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11Z" />
        )
      }

      return <path d="M7 15a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H7z" />
    }}
  </Icon>
)
