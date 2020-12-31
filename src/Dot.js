import React from 'react'
import { Icon } from './Icon'

export const Dot = props => (
  <Icon a11yTitle="Dot" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" />
        )
      }

      return (
        <path d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5s11 4.925 11 11z" />
      )
    }}
  </Icon>
)
