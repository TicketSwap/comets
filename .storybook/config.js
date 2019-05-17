import React from 'react'
import { css, Global } from '@emotion/core'
import { addDecorator, configure } from '@storybook/react'
import { directiveLiteral } from '@babel/types'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
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
    {story()}
  </div>
))

configure(loadStories, module)
