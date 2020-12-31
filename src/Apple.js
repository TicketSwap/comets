import React from 'react'
import { Icon } from './Icon'

export const Apple = props => (
  <Icon a11yTitle="Apple" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M14.8352 7.5L15.253 7.5249C15.923 7.5827 17.3467 7.87883 18.2893 9.29619L18.1494 9.38883C17.7057 9.69946 16.3808 10.7804 16.3994 12.72C16.4233 15.4404 18.721 16.3438 18.7474 16.3578L18.6452 16.6698C18.487 17.1239 18.1378 18.0083 17.5355 18.913L17.1861 19.4275C16.5558 20.3268 15.8611 21.1042 14.8575 21.1227C13.6857 21.1449 13.3087 20.4092 11.9704 20.4092C10.6309 20.4092 10.2118 21.1012 9.10273 21.1458C7.95289 21.1896 7.07698 19.9637 6.34145 18.8716C4.83703 16.6388 3.68951 12.5621 5.23288 9.8101C5.99726 8.44188 7.36676 7.57873 8.85191 7.55499C9.98302 7.53335 11.0492 8.3382 11.7391 8.3382C12.3874 8.3382 13.5668 7.48869 14.8352 7.5ZM14.7775 3C14.89 4.05366 14.4765 5.11013 13.867 5.87017C13.2553 6.6295 12.2545 7.22053 11.2716 7.14228C11.1395 6.11082 11.6345 5.03412 12.2012 4.36105C12.8322 3.6003 13.8979 3.03653 14.7775 3Z" />
        )
      }

      return (
        <path d="M22.366 14.96c-.03-3.036 2.41-4.494 2.52-4.565-1.371-2.062-3.506-2.344-4.266-2.376-1.818-.19-3.546 1.099-4.468 1.099-.92 0-2.341-1.074-3.85-1.045-1.98.032-3.806 1.183-4.825 3.007-2.058 3.67-.528 9.105 1.478 12.082.981 1.456 2.149 3.09 3.682 3.032 1.479-.059 2.038-.982 3.823-.982 1.785 0 2.288.981 3.85.952 1.589-.03 2.597-1.486 3.57-2.947 1.125-1.689 1.588-3.324 1.616-3.407-.035-.018-3.098-1.223-3.13-4.85zM18.99 5.827c.812-1.013 1.363-2.422 1.213-3.827-1.172.049-2.593.8-3.435 1.815-.755.897-1.415 2.333-1.24 3.708 1.311.104 2.646-.684 3.461-1.696z" />
      )
    }}
  </Icon>
)
