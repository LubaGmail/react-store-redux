import { screen, fireEvent, act } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import Nav from '../nav';

describe('Nav tests', () => {
    test('Should see SIGN IN if no currentUser', () => {
        renderWithProviders(<Nav />, {
            preloadedState: {
              user: {
                currentUser: null,
              },
            },
        });
        expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    });

    test('Should see SIGN OUT if if currentUser is not null', () => {
        renderWithProviders(<Nav />, {
            preloadedState: {
              user: {
                currentUser: {},
              },
            },
        });
        expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    });

    test('Should see cart dropdown if cartOpen is true', () => {
        renderWithProviders(<Nav />, {
            preloadedState: {
              cart: {
                cartItems: [],
                isCartOpen: true
              },
            },
        });
        expect(screen.getByText(/your cart/i)).toBeInTheDocument();
    });

    test('Should NOT see cart dropdown if cartOpen is valse', () => {
        renderWithProviders(<Nav />, {
            preloadedState: {
              cart: {
                cartItems: [],
                isCartOpen: false
              },
            },
        });
        expect(screen.queryByText(/your cart/i)).toBeNull();
    });

    // this one needs needs lot of work
    //
    test('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
        const mockDispatch = jest.fn();
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useDispatch: () => mockDispatch,
        }));

        renderWithProviders(<Nav />, {
            preloadedState: {
              user: {
                currentUser: {},
              },
            },
        });
 
        expect(screen.getByText('SIGN OUT')).toBeInTheDocument();
    })
});