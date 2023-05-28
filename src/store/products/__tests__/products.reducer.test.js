import { productsReducer } from '../products.reducer'; 
import { PRODUCTS_ACTION_TYPES } from "../products.types";

describe('productsReducer tests', () => {
    test('set Featured Products test', () => {
        const initialState = {
            products: []
        }
        const mockPayload = [
            [
                {
                    featured: false, price: 25, name: 'H 1'
                },
                {
                    featured: true, price: 10, name: 'H 2'
                }
            ],
            [
                {
                    featured: false, price: 150, name: 'J 1'
                },
                {
                    featured: false, price: 102, name: 'J 2'
                }
            ],
        ];
        const expectedResult = {
            products: mockPayload
        };
        const action = { type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS, payload: mockPayload };
        const res = productsReducer(initialState, action);
        expect(res).toEqual(expectedResult);
    });
    test('invalid type passed', () => {
        const initialState = {
            products: []
        };
        const mockPayload = [
            []
        ];
        const action = { type: 'abc', payload: mockPayload };
        const res = productsReducer(initialState, action);
        expect(res).toEqual(initialState);
        
    });
})