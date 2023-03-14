import { PRODUCTS_ACTION_TYPES } from "./products.types"; 

const INITIAL_PRODUCTS_STATE = {
    products: []
}

export const productsReducer = (state=INITIAL_PRODUCTS_STATE, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}