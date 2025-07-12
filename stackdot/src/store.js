import React from'react';

import { legacy_createStore as createStore} from 'redux'

const initialState = {
  products: [
    { id : 0,name: "", price: 0,category: "" }
  ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
        return {
            ...state,
            products: [...state.products, action.payload]
        };
        default:
        return state;
    }
    switch (action.type) {
        case "REMOVE_PRODUCT":
        return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload.id)
        };
        default:
            return state;
    }
    switch (action.type) {
        case "UPDATE_PRODUCT":
        return {
            ...state,
            products: state.products.map(product =>
                product.id === action.payload.id ? action.payload : product
            )
        };
        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;