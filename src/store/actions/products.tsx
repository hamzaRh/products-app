import axios from 'axios';
import { IProduct } from '../../shared/models'
import * as actionTypes from './actionsTypes';

let url = 'https://test-app-74079.firebaseio.com/list.json';


const fetchProductsStart = (products: IProduct[]) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        products: products
    }
}

const resetProductsStart = (products: IProduct[]) => {
    return {
        type: actionTypes.RESET_PRODUCTS,
        products: products
    } 
}

const randomizeProductsStart = (products:  IProduct[]) => {
    return {
        type: actionTypes.RANDOMIZE_PRODUCTS,
        products: products
    }
}

export const fetchProducts = () => {
    return (dispatch: any) => {
        axios.get(url)
        .then(response =>  {
            console.log('here', response.data.products)
            dispatch(fetchProductsStart(response.data.products))
        })
        .catch(error => {
            console.log(error);
        });
    };
}

export const resetProducts = () => {
    let initialProducts =  [
        {
            count: 3,
            name: 'Orange',
            price: 15
        },
        {
            count: 1,
            name: 'Apple',
            price: 4
        },
        {
            count: 6,
            name: 'Carrot',
            price: 9
        },
    ];

    return (dispatch: any) => {
        axios.put(url, {products: initialProducts})
        .then(response =>  {
            dispatch(resetProductsStart(initialProducts))
        })
        .catch(error => {
            console.log(error);
        });
    };
}

export const randomizeProducts = (products: IProduct[]) => {
    return (dispatch: any) => {
        axios.put(url, {products: products})
        .then(response =>  {
            dispatch(randomizeProductsStart(products))
        })
        .catch(error => {
            console.log(error);
        });
    };
}
