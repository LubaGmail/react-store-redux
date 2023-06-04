import { screen } from '@testing-library/react';

import Category from '../category';
import { renderWithProviders } from '../../../utils/test/test.utils';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      category: 'mens',
    }),
}));

describe('Category component tests', () => {
    test('It should render Categories', () => {
        renderWithProviders(
            <Category />, {
            preloadedState: {
                categories: {
                    categories: [
                        {
                            title: 'mens',
                            items: [
                                { id: 1, name: 'Product 1' },
                                { id: 2, name: 'Product 2' },
                            ],
                        },
                    ],
                },
            },
        });
        // screen.debug();
        expect(screen.getByText(/mens/i)).toBeInTheDocument();
        expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

});