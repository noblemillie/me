'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Html extends _react.Component {
  render() {
    const { assets, store, content } = this.props;
    const preloadedState = store.getState();
    const helmet = _reactHelmet2.default.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return _react2.default.createElement(
      'html',
      htmlAttrs,
      _react2.default.createElement(
        'head',
        null,
        helmet.title.toComponent(),
        helmet.meta.toComponent()
      ),
      _react2.default.createElement(
        'body',
        bodyAttrs,
        _react2.default.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content } }),
        _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}` }
        }),
        _react2.default.createElement('script', { src: assets.vendor.js }),
        _react2.default.createElement('script', { src: assets.main.js })
      )
    );
  }

}

exports.default = Html;
Html.propTypes = {
  content: _propTypes2.default.string,
  store: _propTypes2.default.object,
  assets: _propTypes2.default.object
};

//# sourceMappingURL=root.js.map