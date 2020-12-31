import React from 'react'
import { Icon } from './Icon'

export const Plus = props => (
  <Icon a11yTitle="Plus" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 3C10.8954 3 10 3.89543 10 5V10H5C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14H10V19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19V14H19C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10H14V5C14 3.89543 13.1046 3 12 3Z" />
        )
      }

      return (
        <path d="M18 18v8a2 2 0 0 1-4 0v-8H6a2 2 0 0 1 0-4h8V6a2 2 0 0 1 4 0v8h8a2 2 0 0 1 0 4h-8z" />
      )
    }}
  </Icon>
)
