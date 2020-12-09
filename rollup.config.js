import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    peerDepsExternal(),
    nodeResolve({
      browser: true,
    }),

    commonjs(),
    sass({
      insert: true,
    }),
  ],
};
