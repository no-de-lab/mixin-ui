import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

import packageJson from './package.json';

export default {
    input: 'src/index.tsx',
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
        peerDepsExternal(),
        nodeResolve({
            browser: true,
        }),

        commonjs(),
        sass({
            insert: true,
        }),
        copy({
            targets: [
                {
                    src: 'src/variables.scss',
                    dest: 'lib',
                    rename: 'variables.scss',
                },
                {
                    src: 'src/typography.scss',
                    dest: 'lib',
                    rename: 'typography.scss',
                },
            ],
        }),
    ],
};
