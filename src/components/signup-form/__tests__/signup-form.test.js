import { render, screen, fireEvent } from '@testing-library/react';

import SignupForm from '../signup-form'; 

describe('Sign Up form tests', () => {
    test('Input elements should be in the document', () => {
        render (<SignupForm />)
        let inputNode = screen.getByTestId('display-name-testid');
        expect(inputNode).toBeInTheDocument();

        inputNode = screen.getByTestId('email-testid');
        expect(inputNode).toBeInTheDocument();

        inputNode = screen.getByTestId('pass-testid');
        expect(inputNode).toBeInTheDocument();

        inputNode = screen.getByTestId('confirm-pass-testid');
        expect(inputNode).toBeInTheDocument();

        inputNode = screen.getByTestId('signup-button-testid');
        expect(inputNode).toBeInTheDocument();

        inputNode = screen.getByTestId('clear-button-testid');
        expect(inputNode).toBeInTheDocument();

    });

});