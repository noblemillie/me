'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _home = require('./home.js');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Component should contain the text \'Home\'', () => {
  const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_home2.default, null));

  expect(wrapper.text()).toBe('Home');
});

//# sourceMappingURL=home.test.js.map