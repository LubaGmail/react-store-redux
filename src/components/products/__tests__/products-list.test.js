import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductsList from '../products-list'; 

describe('ProductsList tests', () => {
    test('Shop Now link should be in the document', () => {
        renderWithProviders(
            <ProductsList />,
            {
        
                preloadedState: {
                    products: {
                        products: []
                    }
                }
            }
        );
        let linkEl = screen.queryByText(/shop now/i);
        expect(linkEl).toBeInTheDocument();
        linkEl = screen.queryByRole('link');
        expect(linkEl).toBeInTheDocument();    
    });

    test('Product items to be in the document', () => {
        renderWithProviders(
            <ProductsList />,
            {
                preloadedState: {
                    products: {
                        products: [
                            [
                                { id: 1, featured: false, price: 101, name: 'Hat 1' },
                                { id: 2, featured: true, price: 10, name: 'Hat 2' }
                            ],
                            [
                                { id: 3, featured: false, price: 200, name: 'J 1' },
                                { id: 4, featured: true, price: 102, name: 'J 2' }
                            ]
                        ]
                    }
                }
            }
        );
        // screen.debug(); 
        let nameEl = screen.getByText(/hat 2/i);
        expect(nameEl).toBeInTheDocument();
    });
});