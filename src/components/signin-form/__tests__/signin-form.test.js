import { render, screen, fireEvent } from '@testing-library/react';

import SigninForm from '../signin-form'; 

describe('Sign In form tests', () => {
    test('Should be able to enter value into email field', () => {
        render(<SigninForm />);
        const inputNode = screen.getByTestId('email-input');
        expect(inputNode).toBeInTheDocument();
        fireEvent.change(inputNode,
            {
                target:
                    { value: 'abc@abc.net' }
            });
    });
    test('Should be able to enter value into password field', () => {
        render(<SigninForm />);
        const passNode = screen.getByTestId('pass-input');
        expect(passNode).toBeInTheDocument();
        fireEvent.change(passNode,
            {
                target: { value: '123456' }
            });
    });

    test('Submit button should be in the document', () => {
        render(<SigninForm />);
        const submitEl = screen.getByTestId('signin-button');
        expect(submitEl).toBeInTheDocument();
    });

    test('Google button should be in the document', () => {
        render(<SigninForm />);
        const googleEl = screen.getByTestId('google-button');
        expect(googleEl).toBeInTheDocument();
    });
}); 