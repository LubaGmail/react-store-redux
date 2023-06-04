import { screen } from '@testing-library/react';

import CategoriesPreview from '../categories-preview';
import { renderWithProviders } from '../../../utils/test/test.utils';  

describe('CategoriesPreview tests', () => {

    test('Category items must show', () => {
        renderWithProviders(
            <CategoriesPreview />,
            {
                preloadedState: {
                    categories: {
                        categories: [
                            {
                                title: 'mens',
                                items: [
                                    { id: 1, name: 'M 1' },
                                    { id: 2, name: 'M 2' },
                                ],
                            },
                            {
                                title: 'womens',
                                items: [
                                    { id: 3, name: 'W 1' },
                                    { id: 4, name: 'W 2' },
                                ],
                            },
                        ],
                   
                    }
                }
            }
        );
        
        const titleEl = screen.getByText(/womens/i);
        expect(titleEl).toBeInTheDocument();
        const itemEl = screen.getByText(/m 1/i);
        expect(itemEl).toBeInTheDocument();
        // screen.debug();
    });

})