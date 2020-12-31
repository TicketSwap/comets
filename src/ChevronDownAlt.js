import React from 'react'
import { Icon } from './Icon'

export const ChevronDownAlt = props => (
  <Icon a11yTitle="ChevronDownAlt" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M5.29289 8.29289C5.65338 7.93241 6.22061 7.90468 6.6129 8.2097L6.70711 8.29289L12 13.585L17.2929 8.29289C17.6534 7.93241 18.2206 7.90468 18.6129 8.2097L18.7071 8.29289C19.0676 8.65338 19.0953 9.22061 18.7903 9.6129L18.7071 9.70711L12.7071 15.7071C12.3466 16.0676 11.7794 16.0953 11.3871 15.7903L11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" />
        )
      }

      return (
        <path d="M25 13a.997.997 0 0 1-.293.707L16 22.414l-8.707-8.707a.999.999 0 1 1 1.414-1.414L16 19.586l7.293-7.293A.999.999 0 0 1 25 13z" />
      )
    }}
  </Icon>
)
