'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _contact = require('../styles/contact.scss');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/veronicanerak/awebfactory/learn/next-create-next-apps-examples/my-app-with-global-stylesheet/pages/contact.js?entry';

exports.default = function () {
  return _react2.default.createElement(_layout2.default, { title: 'Contact us', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _contact2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Contact'));
};