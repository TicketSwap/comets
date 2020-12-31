import React from 'react'
import { Icon } from './Icon'

export const ChevronRightAlt = props => (
  <Icon a11yTitle="ChevronRightAlt" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.93241 5.65338 7.90468 6.22061 8.2097 6.6129L8.29289 6.70711L13.585 12L8.29289 17.2929C7.93241 17.6534 7.90468 18.2206 8.2097 18.6129L8.29289 18.7071C8.65338 19.0676 9.22061 19.0953 9.6129 18.7903L9.70711 18.7071L15.7071 12.7071C16.0676 12.3466 16.0953 11.7794 15.7903 11.3871L15.7071 11.2929L9.70711 5.29289Z" />
        )
      }

      return (
        <path d="M12.00025,25.00025 C11.74425,25.00025 11.48825,24.90225 11.29325,24.70725 C10.90225,24.31625 10.90225,23.68425 11.29325,23.29325 L18.58625,16.00025 L11.29325,8.70725 C10.90225,8.31625 10.90225,7.68425 11.29325,7.29325 C11.68425,6.90225 12.31625,6.90225 12.70725,7.29325 L21.41425,16.00025 L12.70725,24.70725 C12.51225,24.90225 12.25625,25.00025 12.00025,25.00025 Z" />
      )
    }}
  </Icon>
)
