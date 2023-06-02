import { screen, fireEvent } from '@testing-library/react'; 

import { renderWithProviders } from '../../../utils/test/test.utils';
import CheckoutList from '../checkout-list';

describe('Checkout list tests', () => {
    
    test('Cart items must show', async() => {
        const { store } = renderWithProviders(
            <CheckoutList />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 1 },
                            { id: 2, name: 'P 2', imageUrl: 'p2.gif', price: 20, quantity: 2 },
                            { id: 3, name: 'P 3', imageUrl: 'p2.gif', price: 30, quantity: 3 },
                        ],
                        isCartOpen: true
                    }
                }
            }
        );
        
        const tableEl = screen.queryByRole('table');
        expect(tableEl).toBeInTheDocument();
        const productHeader = screen.queryByText(/product/i);
        expect(productHeader).toBeInTheDocument();
        const priceEl = screen.queryByText('$10');
        expect(priceEl).toBeInTheDocument();
        
    });

    test('Clear cart', async() => {
        const { store } = renderWithProviders(
            <CheckoutList />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 1 },
                            { id: 2, name: 'P 2', imageUrl: 'p2.gif', price: 20, quantity: 2 },
                            { id: 3, name: 'P 3', imageUrl: 'p2.gif', price: 30, quantity: 3 },
                        ],
                        isCartOpen: true
                    }
                }
            }
        );
        
        const clearEl = screen.queryByText(/clear cart/i);
        await fireEvent.click(clearEl);
        const cartItems = store.getState().cart.cartItems;
        expect(cartItems).toEqual([]);
        const isCartOpenEl = store.getState().cart.isCartOpen;
        expect(isCartOpenEl).toEqual(false);
    });
});