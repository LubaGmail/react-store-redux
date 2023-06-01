import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import Nav from '../nav';

describe('Nav tests', () => {
    test('Should show Shop link', () => {
        renderWithProviders(
            <Nav />,
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
        const linkEl = screen.queryByText(/shop/i);
        expect(linkEl).toBeInTheDocument();
    });

    test('Should show dropDown menu when isCartOpen is true', () => {
        renderWithProviders(
            <Nav />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                        ],
                        isCartOpen: true
                    }
                }
            }
        )
        const linkEl = screen.queryByText(/Your cart/i);
        expect(linkEl).toBeInTheDocument();
    });

    test('Should not show dropDown menu when isCartOpen is false', () => {
        renderWithProviders(
            <Nav />,
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
        const linkEl = screen.queryByText(/Your cart/i);
        expect(linkEl).toBeNull();
    });

});

