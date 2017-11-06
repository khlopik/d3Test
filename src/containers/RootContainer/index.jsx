import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from '@/components/App';

const propTypes = {
  store: PropTypes.shape().isRequired,
};

const RootContainer = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

RootContainer.propTypes = propTypes;

export default RootContainer;
