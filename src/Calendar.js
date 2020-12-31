import React from 'react'
import { Icon } from './Icon'

export const Calendar = props => (
  <Icon a11yTitle="Calendar" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M21 10V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V10H21ZM16 3C16.5128 3 16.9355 3.38604 16.9933 3.88338L17 4C19.2091 4 21 5.79086 21 8V9H3V8C3 5.79086 4.79086 4 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4H15C15 3.44772 15.4477 3 16 3Z" />
        )
      }

      return (
        <path d="M4 22v-9h24v9c0 2.757-2.243 5-5 5H9c-2.757 0-5-2.243-5-5zM23 5c2.757 0 5 2.243 5 5v1H4v-1c0-2.757 2.243-5 5-5V4a1 1 0 1 1 2 0v1h10V4a1 1 0 1 1 2 0v1z" />
      )
    }}
  </Icon>
)
