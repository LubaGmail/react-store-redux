import CATEGORIES_ACTION_TYPES from './categories.types';
import createAction from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categoriesMap) => {

    const action = createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

    /**              -- action logs as:
        type:       "categories/SET_CATEGORIES_MAP",
        payload:    {hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}
     */
    return action
}
