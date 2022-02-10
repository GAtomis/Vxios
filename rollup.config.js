/*
 * @Description: rollup 配置
 * @Author: Gavin
 * @Date: 2022-02-09 15:26:19
 * @LastEditTime: 2022-02-10 14:25:11
 * @LastEditors: Gavin
 */
// rollup.config.js
// import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";


export default {
  input: 'lib/main.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'cjs'
  },
  plugins: [commonjs(),
    terser(),
  ]
};