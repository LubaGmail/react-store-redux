import CATEGORIES_ACTION_TYPES from './categories.types';
import createAction from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categories) => {

    const action = createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

    return action
}
