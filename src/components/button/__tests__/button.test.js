import { render, screen } from '@testing-library/react';

import Button from "../button"; 
import { BUTTON_TYPES } from "../button"; 

describe('Button tests', () => {
    test('Base button type', () => {
        render(<Button>Click Me</Button>);
        const buttonEl = screen.getByText(/click me/i);
        expect(buttonEl).toHaveStyle('background-color: black');
    });
    test('Google button type', () => {
        render(<Button buttonType={BUTTON_TYPES.google}>Click Me</Button>);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toHaveStyle('background-color: #4285f4');
    });
    test('Checkout Button', () => {
        render(<Button buttonType={BUTTON_TYPES.checkout}>Click Me</Button>);
        const buttonEl = screen.getByText(/click/i);
        expect(buttonEl).toHaveStyle('background-color:#1b54b1');
    });
    test('Product button type', () => {
        render(<Button buttonType={BUTTON_TYPES.product}>Click Me</Button>);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toHaveStyle('background-color: #bc2424');
    });
});