import React from 'react'
import { Icon } from './Icon'

export const ListAlt = props => (
  <Icon a11yTitle="ListAlt" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H19ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H19Z" />
        )
      }

      return (
        <path d="M25 15a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h18zM7 10a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2H7zm18 12a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h18z" />
      )
    }}
  </Icon>
)
