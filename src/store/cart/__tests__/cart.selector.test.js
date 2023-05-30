import { selectCart, selectCartItems, selectCartTotalCount, selectCartTotalCost, selectIsCartOpen, }
    from '../cart.selector';

describe('Cart selector tests', () => {
    test('cart object', () => {
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
        const res = selectCart(mockState);
        expect(res).toEqual({ cartItems: [] });
    });
    test('cart items', () => {
        const mockState = {
            cart: {
                cartItems: [
                    {id: 1, quantity: 2, price: 10, featured: true },
                    {id: 2, quantity: 1, price: 20, featured: false },
                ]
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
        const expectedResult = [
          { id: 1, quantity: 2, price: 10, featured: true },
          { id: 2, quantity: 1, price: 20, featured: false }
        ]
    
        const res = selectCartItems(mockState);
        expect(res).toEqual(expectedResult);
    });
    test('selectCartTotalCost', () => {
        const mockState = {
            cart: {
                cartItems: [
                    {id: 1, quantity: 2, price: 10, featured: true },
                    {id: 2, quantity: 1, price: 20, featured: false },
                ],
                isCartOpen: false
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

        const res = selectCartTotalCost(mockState);
        expect(res).toEqual(40);
    });
    test('isCartOpen', () => {
        const mockState = {
            cart: {
                cartItems: [
                    {id: 1, quantity: 2, price: 10, featured: true },
                    {id: 2, quantity: 1, price: 20, featured: false },
                ],
                isCartOpen: true
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

        const res = selectIsCartOpen(mockState);
        expect(res).toBe(true);
    });

});