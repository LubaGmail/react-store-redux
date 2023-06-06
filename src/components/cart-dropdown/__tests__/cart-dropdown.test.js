import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import CartDropdown from '../cart-dropdown';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ( {
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate
    } )
);

describe('CartDropdown tests', () => {
    test('Cart empty test', () => {
        
        renderWithProviders(
            <CartDropdown />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [],
                    },
                },
            });
        
        // screen.debug();
        let msgEl = screen.getByText(/Your cart/i);
        expect(msgEl).toBeInTheDocument();
    });

    test('Cart has items', () => {
        const initialCartItems = [
            { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, name: 'Item B', imageUrl: 'test', price: 20, quantity: 2 },
        ];
        renderWithProviders(<CartDropdown />, {
            preloadedState: {
                cart: {
                    cartItems: initialCartItems,
                },
            },
        });
        
        let nameEl = screen.getByText(/item a/i);
        expect(nameEl).toBeInTheDocument();
        nameEl = screen.getByText(/item b/i);
        expect(nameEl).toBeInTheDocument();
    });

    test('Should navigate to /checkout on click', () => {
        const initialCartItems = [
            { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
            { id: 2, name: 'Item B', imageUrl: 'test', price: 20, quantity: 2 },
        ];
        renderWithProviders(<CartDropdown />, {
            preloadedState: {
                cart: {
                    cartItems: initialCartItems,
                },
            },
        });

        let buttonEl = screen.getByRole('button');
        expect(buttonEl).toBeInTheDocument();
        fireEvent.click(buttonEl);
        expect(mockNavigate).toHaveBeenCalledWith('/checkout');

    });
    
});

