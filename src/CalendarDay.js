import React from 'react'
import { Icon } from './Icon'

export const CalendarDay = props => (
  <Icon a11yTitle="CalendarDay" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M21 10V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V10H21ZM19 12H17V14H19V12ZM16 3C16.5128 3 16.9355 3.38604 16.9933 3.88338L17 4C19.2091 4 21 5.79086 21 8V9H3V8C3 5.79086 4.79086 4 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4H15C15 3.44772 15.4477 3 16 3Z" />
        )
      }

      return (
        <path d="M28 14v9a5.006 5.006 0 01-4.783 4.995L23 28H9a5.006 5.006 0 01-4.995-4.783L4 23v-9h24zm-4 3h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zM22 4a1 1 0 01.993.883L23 5v1a5.006 5.006 0 014.995 4.783L28 11v1H4v-1a5.006 5.006 0 014.783-4.995L9 6V5a1 1 0 011.993-.117L11 5v1h10V5a1 1 0 011-1z" />
      )
    }}
  </Icon>
)
