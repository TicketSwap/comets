import React from 'react'
import { Icon } from './Icon'

export const Minus = props => (
  <Icon a11yTitle="Minus" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M18.0054 10C19.1099 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14H6.00001C4.89543 14 4 13.1046 4 12C4 10.8954 4.89055 10 5.99513 10C9.20935 10 14.971 10 18.0054 10Z" />
        )
      }

      return <path d="M26 18H6a2 2 0 0 1 0-4h20a2 2 0 0 1 0 4" />
    }}
  </Icon>
)
