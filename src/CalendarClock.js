import React from 'react'
import { Icon } from './Icon'

export const CalendarClock = props => (
  <Icon a11yTitle="CalendarClock" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M14.035 9.99958C12.2113 11.1508 11 13.184 11 15.5C11 17.8165 12.2118 19.8499 14.036 21.0011L7 21C4.79086 21 3 19.2091 3 17V10L14.035 9.99958ZM17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20C15.0147 20 13 17.9853 13 15.5C13 13.0147 15.0147 11 17.5 11ZM17.5 12C17.2545 12 17.0504 12.1769 17.0081 12.4101L17 12.5V15.5L17.0081 15.5899C17.0451 15.794 17.206 15.9549 17.4101 15.9919L17.5 16H19.5L19.5899 15.9919C19.794 15.9549 19.9549 15.794 19.9919 15.5899L20 15.5L19.9919 15.4101C19.9549 15.206 19.794 15.0451 19.5899 15.0081L19.5 15H18V12.5L17.9919 12.4101C17.9496 12.1769 17.7455 12 17.5 12ZM16 3C16.5128 3 16.9355 3.38604 16.9933 3.88338L17 4C19.2091 4 21 5.79086 21 8V9H3V8C3 5.79086 4.79086 4 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4H15C15 3.44772 15.4477 3 16 3Z" />
        )
      }

      return (
        <path d="M24 15a7 7 0 110 14 7 7 0 010-14zm-4.128-1A9 9 0 0015 22c0 2.305.867 4.408 2.292 6H9a5.006 5.006 0 01-4.995-4.783L4 23v-9h15.872zM24 17a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 000-2h-2v-3a1 1 0 00-1-1zM22 4a1 1 0 01.993.883L23 5v1a5.006 5.006 0 014.995 4.783L28 11v1H4v-1a5.006 5.006 0 014.783-4.995L9 6V5a1 1 0 011.993-.117L11 5v1h10V5a1 1 0 011-1z" />
      )
    }}
  </Icon>
)
