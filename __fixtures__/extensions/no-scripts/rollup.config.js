/* eslint-disable @typescript-eslint/explicit-function-return-type */
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import { chromeExtension } from '../../../src/index'
import { getExtPath } from '../../utils'

const pkg = require('../../../package.json')

export default {
  input: getExtPath('no-scripts/manifest.json'),
  output: {
    dir: getExtPath('no-scripts-dist'),
    format: 'esm',
  },
  plugins: [
    chromeExtension({ pkg, verbose: false }),
    typescript(),
    resolve(),
    commonjs(),
  ],
}
