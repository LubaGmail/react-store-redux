import { selectFeatured, selectProductsSlice } from '../products.selector'; 
import { PRODUCTS_ACTION_TYPES } from "../products.types";

describe('Products selector tests', () => {
    test('only featured products should be selected', () => {
        const mockState = {
            cart: {
                cartItems: []
            },
            categories: {
                categories: []
            },
             products: {
                 products: [
                     [
                        {
                            featured: false, price: 101, name: 'H 1'
                        },
                        {
                            featured: true, price: 10, name: 'H 2'
                        }
                     ],
                     [
                        {
                            featured: false, price: 200, name: 'J 1'
                        },
                        {
                            featured: true, price: 102, name: 'J 2'
                        }
                     ]
                 ]
            }
        }
        const expectedResult = [
            {
                featured: true, price: 10, name: 'H 2'
            },

            {
                featured: true, price: 102, name: 'J 2'
            }
        ];
        const res = selectFeatured(mockState);
        expect(res).toEqual(expectedResult);
    });

    test('select products slice', () => {
        const mockState = {
            cart: {
                cartItems: []
            },
            categories: {
                categories: []
            },
            products: {
                products: [
                    [], []
                ]
            }
        };
        let res = selectProductsSlice(mockState);
        expect(typeof res).toEqual('object');
        expect( (Object.keys(res))[0] ).toEqual('products');
    });
    
});