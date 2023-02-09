import { useState, useReducer, createContext, } from 'react';

const itemInCart = (cartItems, product) => {
    const existingCartItem = cartItems.find(el => el.id === product.id)
    if (existingCartItem) {
        return true
    } else {
        return false
    }
}

// handles add only from Product
const handleAddItem = (cartItems, product) => {
    if (itemInCart(cartItems, product)) {
        return cartItems.map((el) => 
            el.id === product.id
            ? {...el, quantity: ++el.quantity }
            : el
        )
    } 
    return [...cartItems, { ...product, quantity: 1 } ];
}

// handles adds and deletes from Checkout
const handleUpdateItemQuantity = (cartItems, product) => {
    if (itemInCart(cartItems, product)) {
        let updatedCart = cartItems.map((el) => {
            if (el.id === product.id) {
                el.quantity = product.quantity
                return el
            } else {
                return el
            }
        })
        return updatedCart
    } 
}

// handles "Remove" function from Checkout 
const handleRemoveItem = (cartItems, product) => {
    return cartItems.filter(el => el.id !== product.id)
}

const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
    cartPriceTotal: 0,
    cartOpen: false
}

const REDUCER_TYPES = {
    UPDATE_CART: 'UPDATE_CART',
    TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN'
}

/**
    Replaces useState and useEffect
 */
const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case REDUCER_TYPES.UPDATE_CART:
            return {
                ...state,
                ...payload
            }
        case REDUCER_TYPES.TOGGLE_CART_OPEN:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItem: (product) => null,
    cartTotal: 0,
    cartPriceTotal: 0,
    updateItemQuantity: (product) => null,
    removeItem: (product) => null,
})

export const CartProvider = ({ children }) => {
    // const [cartOpen, setCartOpen] = useState(false);

    const [{ cartItems, cartTotal, cartPriceTotal, cartOpen }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
    );

    // called from Product: const { addItem } = useContext(CartContext)
    const addItem = (product) => {
        let updatedItems = handleAddItem(cartItems, product) 
        updateCart(updatedItems)
    }

    // called from Checkout
    const updateItemQuantity = (product) => {
        let updatedItems = handleUpdateItemQuantity(cartItems, product)
        updateCart(updatedItems)
    }

    // called from Checkout
    const removeItem = (product) => {
        let updatedItems = handleRemoveItem(cartItems, product) 
        updateCart(updatedItems)
    }

    const setCartOpen = () => {
        let x = !cartOpen
        dispatch({
            type: REDUCER_TYPES.TOGGLE_CART_OPEN,
            payload: {
                cartOpen: x
            }
        })
    }

    const updateCart = (updatedItems) => {
        const cartTotal = updatedItems.reduce((accum, el) => {
            return accum += el.quantity
        }, 0)
        const cartPriceTotal= updatedItems.reduce((accum, el) => {
            return accum += (el.quantity * el.price)
        }, 0)
        dispatch({
            type: REDUCER_TYPES.UPDATE_CART,
            payload: {
                cartItems: updatedItems,
                cartTotal: cartTotal,
                cartPriceTotal: cartPriceTotal
            }
        })
    }
    
    // send values to callers in the context
    const value = { cartOpen, setCartOpen, cartItems, addItem, updateItemQuantity, removeItem, cartTotal, cartPriceTotal, };

    return (
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>

    );
}
