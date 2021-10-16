import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.ts', '.js'];

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'LeafletOffline',
    globals: {
      leaflet: 'L',
      idb: 'idb',
    },
  },
  plugins: [resolve({ extensions }), babel({ babelHelpers: 'bundled', extensions })],
  external: ['leaflet', 'idb'],
};
