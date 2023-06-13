import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import SigninForm from '../signin-form';

describe('Sign-in form test', () => {
    test('Form elements should be enabled if a user is not signed in', () => {
        renderWithProviders(
            <SigninForm />,
            {
                preloadedState: {
                    user: {
                        currentUser: null,
                    }
                }
            }
        );
        let input = screen.queryByTestId('email-testid');
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();

        input = screen.queryByTestId('pass-testid');
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();

        input = screen.queryByTestId('signin-button-testid');
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();

        input = screen.queryByTestId('google-button-testid');
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();
    });

    test('Form elements be disabled if a user is signed in', () => {
        renderWithProviders(
            <SigninForm />,
            {
                preloadedState: {
                    user: {
                        currentUser: {},
                    }
                }
            }
        );
        let input = screen.queryByTestId('email-testid');
        expect(input).toBeInTheDocument();
        expect(input).toBeDisabled();

        input = screen.queryByTestId('pass-testid');
        expect(input).toBeInTheDocument();
        expect(input).toBeDisabled();

        input = screen.queryByTestId('signin-button-testid');
        expect(input).toBeInTheDocument();
        expect(input).toBeDisabled();

        input = screen.queryByTestId('google-button-testid');
        expect(input).toBeInTheDocument();
        expect(input).toBeDisabled();
    });

});