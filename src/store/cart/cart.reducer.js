import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_CART_STATE = {
    cartItems: [],
    isCartOpen: false
}

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
    const { type, payload } = action
    
    // state:  {cartItems: Array(0), isCartOpen: true}
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen: !state.isCartOpen }
        default:
            return state
    }
}
