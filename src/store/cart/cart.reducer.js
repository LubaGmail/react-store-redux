import { CART_ACTION_TYPES } from "./cart.types";

/**
    prev state> {categories: {…}, cart: {…}}
        cart: 
            cartItems: Array(0) 
    next state> {categories: {…}, cart: {…}}
        cart:
            cartItems: Array(1)
  */

const INITIAL_CART_STATE = {
    cartItems: []
}

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
    const { type, payload } = action
    
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            let a = { ...state, cartItems: payload }
            console.log('a', a)
            return { ...state, cartItems: payload }
        default:
            return state
    }
}
