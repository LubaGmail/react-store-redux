import { screen } from '@testing-library/react';

import CartIcon from '../cart-icon'; 
import { renderWithProviders } from '../../../utils/test-utils';

describe('Cart Icon tests', () => {
    test('Uses preloaded state to render', () => {
        const initialCartItems = [
            { id: 1, name: 'Item A', imageUrl1: 'test1', price: 10, quantity: 1 },
            { id: 2, name: 'Item A', imageUrl2: 'test2', price: 20, quantity: 2 },
        ];
        
        renderWithProviders(<CartIcon />, {
            preloadedState: {
                cart: {
                    cartItems: initialCartItems,
                }
            }
        });

        const CartLogo = screen.getByText('3');
        expect(CartLogo).toHaveTextContent('3');
        console.log(CartLogo)
    })

})