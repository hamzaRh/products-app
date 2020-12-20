import React from 'react';
import Product from './Product/Product';
import { IProduct } from '../../shared/models';
import './Products.css';

const Products = (props: any) => {

  let productsList;


  productsList = props.products.map((product: IProduct, index: number) => (       
    <Product
      key={index} 
      name={product.name} 
      count={product.count} 
      price={product.price}/>
  ));

   
  
    

  return (
    <div className="Products">
      <h2>Products:</h2>
      { productsList }
    </div>
  );
}

export default Products;