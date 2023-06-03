import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import CheckoutItem  from '../checkout-item';

describe('Cart Item tests', () => {
    test('Cart item should be present', async() => {
        const mockItem = {
            id: 1,
            name: 'P 1',
            imageUrl: 'p1.gif',
            price: 10,
            quantity: 2
        }
        const { store } = renderWithProviders(
            <CheckoutItem  item={mockItem} />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 2 },
                            { id: 3, name: 'P 3', imageUrl: 'p2.gif', price: 30, quantity: 3 },
                        ],
                        isCartOpen: false
                    }
                }
            }
        )
        const itemEl = screen.queryByText('P 1');
        expect(itemEl).toBeInTheDocument();

    });

    test('Click on > to add 1 to quantiry', async() => {
        const mockItem = {
            id: 1,
            name: 'P 1',
            imageUrl: 'p1.gif',
            price: 10,
            quantity: 2
        }
        const { store } = renderWithProviders(
            <CheckoutItem  item={mockItem} />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 2 },
                            { id: 3, name: 'P 3', imageUrl: 'p2.gif', price: 30, quantity: 3 },
                        ],
                        isCartOpen: false
                    }
                }
            }
        )

        const gtEl = screen.getByTestId('gt-testid');
        await fireEvent.click(gtEl);
        const qtyEl = store.getState().cart.cartItems[0].quantity;
        expect(qtyEl).toEqual(3);

    });

    test('Click on < to add 1 to quantiry', async() => {
        const mockItem = {
            id: 1,
            name: 'P 1',
            imageUrl: 'p1.gif',
            price: 10,
            quantity: 2
        }
        const { store } = renderWithProviders(
            <CheckoutItem  item={mockItem} />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 2 },
                            { id: 3, name: 'P 3', imageUrl: 'p2.gif', price: 30, quantity: 3 },
                        ],
                        isCartOpen: false
                    }
                }
            }
        )

        const gtEl = screen.getByTestId('lt-testid');
        fireEvent.click(gtEl);
        const qtyEl = store.getState().cart.cartItems[0].quantity;
        expect(qtyEl).toEqual(1);

    });
});
