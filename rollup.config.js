// see : https://stackoverflow.com/questions/59900538/shared-component-library-best-practices

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import sass from 'rollup-plugin-sass';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];
const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) return () => false;
  return (id) => new RegExp(`^(${externalArr.join('|')})($|/)`).test(id);
};

export default {
  input: 'src/index.js',
  preserveModules: false,
  output: [
    {
      dir: 'lib',
      sourcemapPathTransform: (relativePath) => {
        return path.relative('src', relativePath);
      },
      format: 'cjs', // nextjs not suppot esm
      sourcemap: false,
    },
  ],
  external: makeExternalPredicate(
    Object.keys(packageJson.peerDependencies || {}).concat(
      Object.keys(packageJson.dependencies || {}),
    ),
  ),
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      babelrc: true,
    }),
    peerDepsExternal(),
    nodeResolve({
      browser: true,
    }),

    commonjs({
      include: /node_modules/,
    }),
    sass({
      insert: true,
    }),
  ],
};
