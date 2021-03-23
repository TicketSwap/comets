import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from '@rollup/plugin-replace'
import visualizer from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
    }),
    peerDepsExternal(),
    nodeResolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),
    visualizer(),
    filesize(),
  ],
  external: id =>
    !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
}
