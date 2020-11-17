import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IProduct } from '../../shared/models';
import './Infos.css';

const Infos = (props: any) => {

  const { products } = props;

  const [totalCount, setTotalCount] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect( () => {
    getInfos(products);
  }, [products]);

  const getInfos = (products: IProduct[]) => {
    let count = 0;
    let price = 0;
    products.map(product => {
      count = count + product.count;    
      price = price + product.price;
    });

    setTotalCount(count);
    setAveragePrice(Number((price / products.length).toFixed(2)));
  }

  return (
    <div className="Infos">
        <h2>Informations:</h2>
        <div>Total account: {totalCount}</div>
        <div>Average Price: {averagePrice}</div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
      products: state.products.products
  };
}


export default connect(mapStateToProps)(Infos);
