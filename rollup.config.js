/* globals process */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const plugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  image(),
  postcss({ include: ['src/**/*.css'], modules: true }),
  babel({ babelHelpers: 'bundled' }),
  !IS_PRODUCTION &&
    serve({
      open: true,
      port: 8080,
      contentBase: 'public',
    }),
  !IS_PRODUCTION && livereload('public'),
  IS_PRODUCTION && terser(),
];

export default {
  input: './src/index.js',
  output: {
    file: 'public/dist/bundle.js',
  },
  plugins,
};
