import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categoriesMap) =>
    // export const createAction = (type, payload) => ({ type, payload });
    //
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);