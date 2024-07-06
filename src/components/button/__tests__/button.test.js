import { render, screen } from '@testing-library/react';
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
})
