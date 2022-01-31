import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    name: 'hobi-random'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    json(),
    commonjs()
  ]
};
