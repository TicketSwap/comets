import React from 'react'
import { Icon } from './Icon'

export const Info = props => (
  <Icon a11yTitle="Info" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 10C13.1046 10 14 10.8954 14 12V17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17V12C10 10.8954 10.8954 10 12 10ZM12 5C13.1046 5 14 5.89543 14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5Z" />
        )
      }

      return (
        <path d="M18 23a2 2 0 11-4 0v-8a2 2 0 114 0v8zm-2-12a2 2 0 11-.001-3.999A2 2 0 0116 11z" />
      )
    }}
  </Icon>
)
