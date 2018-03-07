'use strict';

var _reactHotLoader = require('react-hot-loader');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactDom = require('react-dom');

var _app = require('./containers/app');

var _app2 = _interopRequireDefault(_app);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = module.hot && module.hot.data && module.hot.data.store ? module.hot.data.store : (0, _redux.createStore)(_reducers2.default, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const contentEl = document.getElementById('content');

(0, _reactDom.hydrate)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(_app2.default, null)
  )
), contentEl);

if (module.hot) {

  module.hot.accept();

  module.hot.dispose(data => {
    data.store = store;
  });
}

//# sourceMappingURL=index.js.map