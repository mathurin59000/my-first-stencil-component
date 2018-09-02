import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-first-stencil-component',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
