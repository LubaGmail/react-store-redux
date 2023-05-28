import { categoriesReducer } from "../categories.reducer"; 
import CATEGORIES_ACTION_TYPES from '../categories.types'; 

/*
    reducer
        state
        action -> {type, payload}
    return { ...state, categories: payload };
    npm test src/store/categories/__tests__/categories.reducer.test.js
*/

describe('categoriesReducer tests', () => {
    test('valid SET_CATEGORIES test', () => {
        const mockData = [
            {
              title: 'mens',
              imageUrl: 'test',
              items: [
                { id: 1, name: 'M 1' },
                { id: 2, name: 'M 2' },
              ],
            },
            {
              title: 'womens',
              imageUrl: 'test',
              items: [
                { id: 3, name: 'W 1' },
                { id: 4, name: 'W 2' },
              ],
            },
        ];
        const initialState = [];
        const expectedState = {
            ...initialState,
            categories: mockData,
        };

        // const { type, payload } = action;
        let res = categoriesReducer(
            initialState,
            {
                type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
                payload: mockData
            }
        )

        expect(res).toEqual(expectedState);
    });
    test('invalid abc test', () => {
        const mockData = [
            {
              title: 'mens',
              imageUrl: 'test',
              items: [
                { id: 1, name: 'M 1' },
                { id: 2, name: 'M 2' },
              ],
            },
        ];
        const initialState = [];
        const notExpectedState = {
            ...initialState,
            categories: [],
        };

        // const { type, payload } = action;
        let res = categoriesReducer(
            initialState,
            {
                type: 'abc',
                payload: mockData
            }
        )

        expect(res).toEqual(initialState);
    });
});
