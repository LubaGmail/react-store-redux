import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Button, { BUTTON_TYPES } from '../button';

describe('button tests', () => {
    test('should render base button when nothing is passed', () => {
        render(<Button>Test</Button>);

        expect(screen.getByRole('button')).toHaveStyle('background-color: black');
        expect(screen.getByRole('button')).not.toBeDisabled();
    })
    test('should render google button when passed google type', () => {
        render(<Button buttonType={BUTTON_TYPES.google}>Test</Button>);
    
        expect(screen.getByRole('button')).toHaveStyle('background-color: #4285f4');
    });
    test('should be disabled', () => {
        render(<Button buttonType={BUTTON_TYPES.disabled}>Test</Button>)>
    
        expect(screen.getByRole('button')).toHaveStyle('cursor: not-allowed');
    });
    it('button to be disabled when isloading prop is true', () => {
        render(<Button isloading={true}>Test</Button>);
        const el = screen.getByText(/Test/i)
        expect(el).toHaveAttribute('disabled');
    })
})

describe('test onClick', () => {
    test('trigger clicking the button', () => {
        const mockFn = jest.fn(console.log('clicked!'));
        render(<Button onclick={mockFn}>Test</Button>)

        const el = screen.getByText(/Test/i)
        fireEvent.click(el);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
})
