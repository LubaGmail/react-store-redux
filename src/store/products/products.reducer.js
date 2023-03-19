import { PRODUCTS_ACTION_TYPES } from "./products.types"; 

const INITIAL_PRODUCTS_STATE = {
    products: [],
    loading: false,
    error: null
}

export const productsReducer = (state=INITIAL_PRODUCTS_STATE, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START:
            return {...state, loading: true}
        case PRODUCTS_ACTION_TYPES.GET_PRODUCTS_SUCCESS:
            return { ...state, products: payload, loading: false }
        case PRODUCTS_ACTION_TYPES.GET_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: payload}
        default:
            return state;
    }
}