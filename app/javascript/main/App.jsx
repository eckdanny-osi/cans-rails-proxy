import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const App = ({ name }) => (
  <div>
    <button>Hello!</button>
  </div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
