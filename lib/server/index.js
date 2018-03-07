'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('source-map-support/register');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _development = require('../../webpack/development.js');

var _development2 = _interopRequireDefault(_development);

var _layout = require('../client/layout.js');

var _layout2 = _interopRequireDefault(_layout);

var _reducers = require('../client/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _root = require('./root.js');

var _root2 = _interopRequireDefault(_root);

var _webpackAssets = require('../../webpack-assets.json');

var _webpackAssets2 = _interopRequireDefault(_webpackAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dev server only
const app = (0, _express2.default)();

app.use((0, _serveFavicon2.default)('./public/penrose.ico'));
app.use('/pub', _express2.default.static('public', { maxAge: '365d' }));

// TODO ensure this gets DCE
if (process.env.NODE_ENV !== 'production') {
  const compiler = (0, _webpack2.default)(_development2.default);

  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    // this tells the middleware where to send assets in memory, so
    // if you're seeing 404's for assets it's probably because this isn't
    // set correctly in this middleware
    publicPath: _development2.default.output.publicPath,
    hot: true
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler, {
    reload: true // reload page when webpack gets stuck
  }));
}

app.get('*', (req, res) => {

  const store = (0, _redux.createStore)(_reducers2.default);
  const context = {};

  const content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store, key: 'provider' },
      _react2.default.createElement(_layout2.default, null)
    )
  ));

  // in order for the bundled react to reconcile with the server rendered tree,
  // we must renderToString the two different sections, so that the render from
  // client/index has a matching tree
  const html = (0, _server.renderToString)(_react2.default.createElement(_root2.default, {
    store: store,
    assets: _webpackAssets2.default,
    content: content
  }));

  res.send(html);
});

exports.default = app;

//# sourceMappingURL=index.js.map