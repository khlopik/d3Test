import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from '@/containers/RootContainer';
import store from '@/store';

render(
  <AppContainer>
    <RootContainer store={store} />
  </AppContainer>,
  document.getElementById('root'),
);
