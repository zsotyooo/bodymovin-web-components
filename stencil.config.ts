import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'bodymovin-web-components',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  excludeSrc: [
    'tasks/**',
    '**/test/**',
    '**/testing/**',
    '**/*.spec.*',
    '**/*.e2e.*',
    '**/*.preview.*',
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
