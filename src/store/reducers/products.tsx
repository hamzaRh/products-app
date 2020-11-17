import * as actionsTypes from '../actions/actionsTypes';
import { updatedObject } from '../../shared/utility';

const intitialState = {
    products : []
};


const fetchProducts = (state: any, action: any) => {
    return updatedObject(state, {products: action.products});
}

const resetProducts = (state: any, action: any) => {
    return updatedObject(state, {products: action.products});
}

const randomizeProducts = (state: any, action: any) => {
    return updatedObject(state, {products: action.products});
}

const reducer = (state = intitialState, action: any) => {
    switch (action.type) {
        case actionsTypes.FETCH_PRODUCTS : return fetchProducts(state, action);    
        case actionsTypes.RESET_PRODUCTS : return resetProducts(state, action);       
        case actionsTypes.RANDOMIZE_PRODUCTS : return randomizeProducts(state, action);        
        default:
            return state;
    }    
};

export default reducer;