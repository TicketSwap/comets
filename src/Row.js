import React from 'react'
import { Icon } from './Icon'

export const Row = props => (
  <Icon a11yTitle="Row" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M17.6 16C18.3728 16 19 16.672 19 17.5C19 18.328 18.3728 19 17.6 19H6.4C5.6272 19 5 18.328 5 17.5C5 16.672 5.6272 16 6.4 16H17.6ZM19.8571 10C21.0407 10 22 10.8953 22 12C22 13.1047 21.0407 14 19.8571 14H4.14286C2.95929 14 2 13.1047 2 12C2 10.8953 2.95929 10 4.14286 10H19.8571ZM17.6 5C18.3728 5 19 5.672 19 6.5C19 7.328 18.3728 8 17.6 8H6.4C5.6272 8 5 7.328 5 6.5C5 5.672 5.6272 5 6.4 5H17.6Z" />
        )
      }

      return (
        <path d="M24 10H8a2 2 0 0 1 0-4h16a2 2 0 0 1 0 4zm3 9H5a3 3 0 1 1 0-6h22a3 3 0 1 1 0 6zm-3 7H8a2 2 0 0 1 0-4h16a2 2 0 0 1 0 4z" />
      )
    }}
  </Icon>
)
