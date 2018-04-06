import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './config/routes';
import store from './config/store';

export default App = () => (
  <Provider store={store}>
    <AppWithNavigationState/>
  </Provider>
)