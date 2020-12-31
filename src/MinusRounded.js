import React from 'react'
import { Icon } from './Icon'

export const MinusRounded = props => (
  <Icon a11yTitle="MinusRounded" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16 11H8C7.44772 11 7 11.4477 7 12C7 12.5128 7.38604 12.9355 7.88338 12.9933L8 13H16C16.5523 13 17 12.5523 17 12C17 11.4872 16.614 11.0645 16.1166 11.0067L16 11Z" />
        )
      }

      return (
        <path d="M23.034 17.962c1.1-.004 1.995-.9 2-2a1.972 1.972 0 00-1.984-1.983l-14.083.059c-1.1.004-1.996.9-2 2A1.967 1.967 0 008.95 18.02l14.084-.059zm6.127 2.663a13.508 13.508 0 01-8.536 8.536C14.98 31.025 9.602 29.4 6.1 25.899 2.599 22.398.974 17.02 2.839 11.376a13.51 13.51 0 018.536-8.537C17.02.975 22.398 2.599 25.9 6.1c3.501 3.502 5.125 8.88 3.261 14.525z" />
      )
    }}
  </Icon>
)
