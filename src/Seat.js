import React from 'react'
import { Icon } from './Icon'

export const Seat = props => (
  <Icon a11yTitle="Seat" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M20 14C20.5128 14 20.9355 14.386 20.9933 14.8834L21 15V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V15C3 14.4477 3.44772 14 4 14C4.51284 14 4.93551 14.386 4.99327 14.8834L5 15V18H19V15C19 14.4477 19.4477 14 20 14ZM15.75 4C16.9926 4 18 5.00736 18 6.25V17H6V6.25C6 5.00736 7.00736 4 8.25 4H15.75Z" />
        )
      }

      return (
        <path d="M28 14a2 2 0 0 1 2 2v10H2V16a2 2 0 0 1 4 0v6h20v-6a2 2 0 0 1 2-2zm-4-4v10H8V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4z" />
      )
    }}
  </Icon>
)
