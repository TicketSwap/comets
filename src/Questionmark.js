import React from 'react'
import { Icon } from './Icon'

export const Questionmark = props => (
  <Icon a11yTitle="Questionmark" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 18C12.8284 18 13.5 18.6716 13.5 19.5C13.5 20.3284 12.8284 21 12 21C11.1716 21 10.5 20.3284 10.5 19.5C10.5 18.6716 11.1716 18 12 18ZM12 2.5C15.9436 2.5 18.5 5.25308 18.5 8.5C18.5 10.7322 17.5073 12.0921 15.5562 13.4119L14.4675 14.1127L14.1877 14.2995C13.6867 14.6452 13.5246 14.8293 13.5027 14.9666L13.5 15V17H10.5V15C10.5 13.5704 11.1956 12.7023 12.6042 11.7487L13.0063 11.4859L13.6825 11.0548C15.0277 10.1805 15.5 9.57432 15.5 8.5C15.5 6.8623 14.235 5.5 12 5.5C10.0013 5.5 8.59938 7.03809 8.50507 8.35935L8.5 8.5V10H5.5V8.5C5.5 5.58086 8.17008 2.5 12 2.5Z" />
        )
      }

      return (
        <path d="M8 9.726C8.156 5.266 11.328 2 17.107 2 22.439 2 26 5 26 9.176c0 2.904-1.479 4.935-4.125 6.473-2.55 1.443-3.27 2.43-3.27 4.328v1.101h-4.514l-.02-1.348c-.175-2.81.954-4.518 3.64-6.055 2.412-1.424 3.23-2.45 3.23-4.329 0-2.012-1.635-3.473-4.087-3.473-2.51 0-4.125 1.5-4.281 3.853H8zM16.406 30c-1.576 0-2.84-1.196-2.84-2.696 0-1.5 1.264-2.676 2.84-2.676 1.577 0 2.822 1.177 2.822 2.676 0 1.5-1.245 2.696-2.822 2.696z" />
      )
    }}
  </Icon>
)
