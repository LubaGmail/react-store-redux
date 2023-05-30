import { cartReducer } from "../cart.reducer"; 
import { CART_ACTION_TYPES } from '../cart.types'; 

describe('cartReducer tests', () => {
    test('SET_CART_ITEMS', () => {
        const initialState = {
            cartItems: [],
            isCartOpen: false
        }
        const mockPayload = [
            { id: 1, name: 'P 1' },
            { id: 2, name: 'P 2' }
        ]
        const action = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: mockPayload
        }
        const expectedResult = {
            cartItems: mockPayload,
            isCartOpen: false
        }

        const res = cartReducer(initialState, action);
        expect(res).toEqual(expectedResult);
    });
    test('SET_IS_CART_OPEN false to true', () => {
        const initialState = {
            cartItems: [],
            isCartOpen: false
        }
        const action = {
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN
        }
        const expectedResult = {
            cartItems: [],
            isCartOpen: true
        }
        const res = cartReducer(initialState, action);
        expect(res).toEqual(expectedResult);
    });
    test('SET_IS_CART_OPEN true to false', () => {
        const initialState = {
            cartItems: [],
            isCartOpen: true
        }
        const action = {
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN
        }
        const expectedResult = {
            cartItems: [],
            isCartOpen: false
        }

        const res = cartReducer(initialState, action);
        expect(res).toEqual(expectedResult);
    });
    test('CLEAR_CART', () => {
        const initialState = {
            cartItems: [
                { id: 1, name: 'P 1' },
                { id: 2, name: 'P 2' }
            ],
            isCartOpen: true
        }
        const action = {
            type: CART_ACTION_TYPES.CLEAR_CART
        };
        const expectedResult = {
            cartItems: [],
            isCartOpen: false
        };
        const res = cartReducer(initialState, action);
        expect(res).toEqual(expectedResult);
    });
    test('Invalid type', () => {
        const initialState = {
            cartItems: [],
            isCartOpen: false
        }
        const action = {
            type: 'abc'
        }
        const res = cartReducer(initialState, action);
        expect(res).toEqual(initialState);
    });
});