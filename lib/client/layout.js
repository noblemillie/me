'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('./containers/home.js');

var _home2 = _interopRequireDefault(_home);

var _about = require('./containers/about.js');

var _about2 = _interopRequireDefault(_about);

var _datasetTools = require('./containers/datasetTools.js');

var _datasetTools2 = _interopRequireDefault(_datasetTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//debugger; // eslint-disable-line no-debugger

class Layout extends _react.Component {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'b-nav' },
        _react2.default.createElement(
          'div',
          { className: 'b-nav__wrap' },
          _react2.default.createElement(
            'div',
            { className: 'b-nav__homelink' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'home'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/about' },
              'about'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/datasetTools' },
              'dataset.tools'
            )
          )
        )
      ),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: _about2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/datasetTools', component: _datasetTools2.default })
    );
  }
}
exports.default = Layout;

//# sourceMappingURL=layout.js.map