import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils"; 

import CartIcon from '../cart-icon';

describe('Cart icon tests', () => {
    test('Cart count', () => {
        renderWithProviders(
            <CartIcon />,
            {
                preloadedState: {
                    cart: {
                        cartItems: [
                            { id: 1, name: 'P 1', imageUrl: 'p1.gif', price: 10, quantity: 1 },
                            { id: 2, name: 'P 2', imageUrl: 'p2.gif', price: 20, quantity: 2 },
                        ],
                        isCartOpen: false
                    }
                }
            }
        );
        const cartCountEl = screen.getByText('3');
        expect(cartCountEl).toBeInTheDocument();
    });
});