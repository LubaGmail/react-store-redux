import { selectCategoriesSlice, selectCategoriesArray, selectCategoriesMap } from '../categories.selector'; 

/**
    state = {categories: {…}, cart: {…}}                               obj of objs
      slice = state.categories = {categories: Array(5)}                obj of Array
        categories = state.categories.categories = (5) [{…}, {…}, {…}, {…}, {…}]    Array of objs: title, items
 */

describe('categoriesSelector tests', () => {
    test('select categories slice', () => {
        const mockState = {
            cart: {
                cartItems: []
            },
            categories: {
                categories: {
                    items: [],
                    title: 'Hats'
                }
            }
        }
        const res = selectCategoriesSlice(mockState);
        const key = Object.keys(res)[0];
        expect(key).toEqual('categories');
    });
    test('select categories array', () => {
        const mockState = {
            cart: {
                cartItems: []
            },
            categories: {
                categories: {
                    items: [],
                    title: 'Hats'
                }
            }
        }
        //  { items: [], title: 'Hats' }
        const res = selectCategoriesArray(mockState);
        expect(res.title).toEqual('Hats');
        expect(res.items).toEqual([]);
    });
    test('select categories map', () => {
        const mockState = {
            cart: {
                cartItems: []
            },
            categories: {
                categories: [
                    {
                        title: 'Hats',
                        items: []
                    },
                    {
                        title: 'Jackets',
                        items: []
                    }
                ]
            }
        }
        const res = selectCategoriesMap(mockState);
        const keys = Object.keys(res);
        const values = Object.values(res);
        expect(keys).toEqual(['hats', 'jackets']);
        expect(values).toEqual([[], []]);
    });
    
});

