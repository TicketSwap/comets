const esbuild = require('esbuild')
// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const isDev = process.argv.includes('--dev')

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    outExtension: { '.js': '.es.js' },
    outdir: 'dist',
    splitting: true,
    bundle: true,
    sourcemap: true,
    target: 'node14',
    format: 'esm',
    treeShaking: true,
    ...(isDev ? { watch: true } : {}),
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1))

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    outdir: 'dist',
    bundle: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14',
    format: 'cjs',
    treeShaking: true,
    ...(isDev ? { watch: true } : {}),
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1))
