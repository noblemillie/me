'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _layout = require('../layout.js');

var _layout2 = _interopRequireDefault(_layout);

var _sidenav = require('../sidenav.js');

var _sidenav2 = _interopRequireDefault(_sidenav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  render() {
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_sidenav2.default, null),
      _react2.default.createElement(_layout2.default, null)
    );
  }
}
exports.default = App;

//# sourceMappingURL=app.js.map