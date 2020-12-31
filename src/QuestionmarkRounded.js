import React from 'react'
import { Icon } from './Icon'

export const QuestionmarkRounded = props => (
  <Icon a11yTitle="QuestionmarkRounded" {...props}>
    {({ isSmallIcon }) => {
      if (isSmallIcon) {
        return (
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13 17H11V19H13V17ZM12 6C9.69096 6 8.09881 7.92918 8.00444 9.79135L8 9.96568V10.9657H10V9.96568L10.0052 9.84209C10.0771 8.97141 10.8939 8 12 8C13.2606 8 14 8.87465 14 9.96568C14 10.6447 13.7576 11.035 13.0825 11.5445L12.9189 11.6644L12.4089 12.0219C11.5305 12.6491 11.0645 13.2035 11.0062 14.0609L11 14.2494V16H13V14.2494L13.0029 14.2131C13.021 14.1029 13.1276 13.9768 13.4539 13.7348L13.571 13.6497L14.0811 13.2921C15.3535 12.3836 16 11.4724 16 9.96568C16 7.83755 14.4466 6 12 6Z" />
        )
      }

      return (
        <path d="M26.78 10.826a11.578 11.578 0 0 1 0 10.348C24.49 25.724 20.245 28 16 28c-4.244 0-8.489-2.276-10.78-6.826a11.578 11.578 0 0 1 0-10.348C7.511 6.275 11.756 4 16 4c4.245 0 8.49 2.275 10.78 6.826zM11 12.863h2.54c.087-1.177.984-1.927 2.379-1.927 1.362 0 2.27.731 2.27 1.737 0 .94-.454 1.452-1.794 2.164-1.492.77-2.12 1.623-2.022 3.028l.01.674h2.509v-.55c0-.95.4-1.443 1.816-2.165C20.178 15.056 21 14.04 21 12.588 21 10.5 19.022 9 16.06 9c-3.211 0-4.974 1.633-5.06 3.863zM15.67 23c.876 0 1.568-.598 1.568-1.348 0-.75-.692-1.338-1.568-1.338-.875 0-1.578.588-1.578 1.338 0 .75.703 1.348 1.578 1.348z" />
      )
    }}
  </Icon>
)
