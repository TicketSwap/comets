import React from 'react'
import { Icon } from './Icon'

export const PlusAlt = props => (
  <Icon a11yTitle="PlusAlt" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3Z" />
        )
      }

      return (
        <path d="M25 15h-8V7a1 1 0 1 0-2 0v8H7a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2" />
      )
    }}
  </Icon>
)
