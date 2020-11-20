import React from 'react'
import { css, Global } from '@emotion/react'

export const decorators = [
  Story => (
    <div style={{ padding: 16 }}>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
            padding: 0;
            border: 0;
          }

          .icon {
            background-color: #eee;
          }
        `}
      />
      <Story />
    </div>
  ),
]

export const parameters = {
  passArgsFirst: false,
}
