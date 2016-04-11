'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _formatDecimal = require('@nib/format-decimal');

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductHeader(props) {
  var name = props.name;
  var type = props.type;
  var _props$price = props.price;
  var amount = _props$price.amount;
  var frequency = _props$price.frequency;
  var isPriceLoading = props.isPriceLoading;
  var isSticky = props.sticky;
  var index = props.index;


  var classes = (0, _classnames2.default)('product-overview-header', 'product-overview-header--index-' + index, { 'product-overview-header--type-hospital': type === 'hospital' }, { 'product-overview-header--type-extras': type === 'extras' }, { 'product-overview-header--type-packaged': type === 'packaged' }, { 'product-overview-header--sticky': isSticky });

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'div',
      { className: 'product-overview-header__name' },
      name
    ),
    _react2.default.createElement(
      'span',
      { className: 'product-overview-header__from' },
      'from'
    ),
    _react2.default.createElement(
      'div',
      { className: 'product-overview-header__price' },
      isPriceLoading ? _react2.default.createElement('i', { className: 'v2-icon v2-icon--spinner v2-icon--spin v2-icon--white' }) : '$' + _formatDecimal2.default.format(amount, { places: 2, separator: ',' }) + '*'
    ),
    _react2.default.createElement(
      'span',
      { className: 'product-overview-header__frequency' },
      frequency
    )
  );
}

ProductHeader.propTypes = {

  name: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired,

  price: _react2.default.PropTypes.shape({
    amount: _react2.default.PropTypes.number,
    frequency: _react2.default.PropTypes.string
  }).isRequired,

  isPriceLoading: _react2.default.PropTypes.bool.isRequired,
  index: _react2.default.PropTypes.number.isRequired

};

ProductHeader.defaultProps = {
  isLoading: false,
  isPriceLoading: false
};
//# sourceMappingURL=index.js.map