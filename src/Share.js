import React from 'react'
import { Icon } from './Icon'

export const Share = props => (
  <Icon a11yTitle="Share" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M11 10V15C11 15.5523 11.4477 16 12 16C12.5128 16 12.9355 15.614 12.9933 15.1166L13 15V10H18C19.1046 10 20 10.8954 20 12V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V12C4 10.8954 4.89543 10 6 10H11ZM12.6129 3.2097L12.7071 3.29289L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711C15.3466 8.06759 14.7794 8.09532 14.3871 7.7903L14.2929 7.70711L13 6.415V10H11V6.413L9.70711 7.70711C9.34662 8.06759 8.77939 8.09532 8.3871 7.7903L8.29289 7.70711C7.93241 7.34662 7.90468 6.77939 8.2097 6.3871L8.29289 6.29289L11.2929 3.29289C11.6534 2.93241 12.2206 2.90468 12.6129 3.2097Z" />
        )
      }

      return (
        <path d="M23 12c1.654 0 3 1.345 3 3v12c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V15c0-1.655 1.346-3 3-3h6v7a1 1 0 1 0 2 0v-7h6zM12.207 8.205a.999.999 0 1 1-1.414-1.414l4.499-4.5a1.001 1.001 0 0 1 1.416 0l4.499 4.5a.999.999 0 1 1-1.414 1.414L17 5.413v6.586h-2V5.413l-2.793 2.793z" />
      )
    }}
  </Icon>
)
