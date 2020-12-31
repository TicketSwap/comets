import React from 'react'
import { Icon } from './Icon'

export const List = props => (
  <Icon a11yTitle="List" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M19 16C19.5523 16 20 16.4477 20 17V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V17C4 16.4477 4.44772 16 5 16H19ZM19 11C19.5523 11 20 11.4477 20 12V13C20 13.5523 19.5523 14 19 14H5C4.44772 14 4 13.5523 4 13V12C4 11.4477 4.44772 11 5 11H19ZM19 6C19.5523 6 20 6.44772 20 7V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V7C4 6.44772 4.44772 6 5 6H19Z" />
        )
      }

      return (
        <path d="M26 14a2 2 0 1 1 0 4H6a2 2 0 1 1 0-4h20zm0 8a2 2 0 1 1 0 4H6a2 2 0 1 1 0-4h20zM6 10a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4H6z" />
      )
    }}
  </Icon>
)
