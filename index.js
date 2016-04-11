import React from 'react';
import classNames from 'classnames';
import formatDecimal from '@nib/format-decimal';

export default function ProductHeader(props) {
  const {name, type, price: {amount, frequency}, isPriceLoading, sticky: isSticky, index} = props;

  const classes = classNames(
    'product-overview-header',
    `product-overview-header--index-${index}`,
    {'product-overview-header--type-hospital': type === 'hospital'},
    {'product-overview-header--type-extras': type === 'extras'},
    {'product-overview-header--type-packaged': type === 'packaged'},
    {'product-overview-header--sticky': isSticky}
  );

  return (
    <div className={classes}>
      <div className="product-overview-header__name">{name}</div>
      <span className="product-overview-header__from">from</span>

      <div className="product-overview-header__price">
      {isPriceLoading
        ? <i className="v2-icon v2-icon--spinner v2-icon--spin v2-icon--white"/>
        : `\$${formatDecimal.format(amount, {places: 2, separator: ','})}*`
      }
      </div>

      <span className="product-overview-header__frequency">{frequency}</span>
    </div>
  );
}

ProductHeader.propTypes = {

  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,

  price: React.PropTypes.shape({
    amount: React.PropTypes.number,
    frequency: React.PropTypes.string
  }).isRequired,

  isPriceLoading: React.PropTypes.bool.isRequired,
  index: React.PropTypes.number.isRequired

};

ProductHeader.defaultProps = {
  isLoading: false,
  isPriceLoading: false
};