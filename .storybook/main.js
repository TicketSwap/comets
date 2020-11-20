const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/*.stories.js'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Fix for storybook saying @emotion/styled is actually emotion-styled.
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
        },
      },
    }
  },
}
