import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Products from './components/Products/Products';
import Infos from './components/Infos/Infos';
import Actions from './components/Actions/Actions';
import Counter from './components/Counter/Counter';
import Spinner from './components/Spinner/Spinner';
import { IProduct } from './shared/models';
import * as actions from './store/actions';
import './App.css';


const app = (props: any) => {
  let content;
  const { products, onFetchProducts, onResetProducts, onRandomizeProducts } = props;

  useEffect( () => {
     onFetchProducts();
  }, [onFetchProducts]);

  const randomize = () => {
    let randomizeProducts = [...products];

    randomizeProducts.map((product: IProduct) => {
      product.count = getRandomInt(1, 8);
      product.price = getRandomInt(1, 20);
    })
    onRandomizeProducts(randomizeProducts);
  }  

  const reset = () => {
    onResetProducts();
  } 

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  content = <Spinner/>

  if (products) {
    content = (
      <div>
        <Products products={products}/>
        <Infos products={products}/>
        <Actions randomize={randomize} reset={reset}/>
        <Counter/>
      </div>
    )
  }


  return (
    <div className="App">
      {content}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
      products: state.products.products
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      onFetchProducts: () => dispatch(actions.fetchProducts()),
      onResetProducts: () => dispatch(actions.resetProducts()),
      onRandomizeProducts: (randomizeProducts: IProduct[]) => dispatch(actions.randomizeProducts(randomizeProducts))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(app);
