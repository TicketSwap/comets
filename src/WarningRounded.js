import React from 'react'
import { Icon } from './Icon'

export const WarningRounded = props => (
  <Icon a11yTitle="WarningRounded" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V7Z" />
        )
      }

      return (
        <path d="M18 16a2 2 0 1 1-4 0v-6a2 2 0 1 1 4 0v6zm-2 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 16 24zm0-22C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2z" />
      )
    }}
  </Icon>
)
