import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import(/* webpackChunkName: 'app' */ './App')
.then(({ default: App }) =>
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
)

