import React from 'react';
import { IProduct } from '../../../shared/models';
import './Product.css';

const Product = (props: IProduct) => {
  const { name, count, price } = props;
  return (
    <div className="Product">
      <div> Name: {name}</div>
      <div>Count : {count}</div>
      <div>Price: {price}</div>         
    </div>
  );
}

export default Product;