import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import Product from '../product';

describe('Add to cart tests', () => {
    test('Add 1 product when cart is empty', async() => {
        const mockProduct = {
            id: 1, name: 'P 1',
            imageUrl: 'p1.gif',
            price: 10, quantity: 1
        }
        const { store } = renderWithProviders(
            <Product product={mockProduct} />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                        ],
                        isCartOpen: false
                    }
                }
            }
        )
        const buttonEl = screen.queryByText(/add to cart/i);
        await fireEvent.click(buttonEl);
        const state = store.getState();
        const cart = state.cart;
        const cartItems = cart.cartItems;
        expect(cartItems.length).toEqual(1);
        expect(cartItems[0]).toEqual(mockProduct);
    });

    test('Add 1 product when cart has 1 item', async() => {
        const mockProduct = {
            id: 1, name: 'P 1',
            imageUrl: 'p1.gif',
            price: 10,
            quantity: 1
        }
        const { store } = renderWithProviders(
            <Product product={mockProduct} />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 1 },
                        ],
                        isCartOpen: false
                    }
                }
            }
        )
        const buttonEl = screen.queryByText(/add to cart/i);
        await fireEvent.click(buttonEl);
        const cartItems = store.getState().cart.cartItems;
        expect(cartItems.length).toEqual(1);
        expect(cartItems[0].quantity).toEqual(2);
    });
});
