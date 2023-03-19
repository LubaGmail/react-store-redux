import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategories } from "../../utils/firebase/firebase";

export const fetchCategoriesAsyncStart = () => {
    return async (dispatch) => {
        dispatch({
            type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES_START
        })
        try {
            const categories = await getCategories();
            dispatch({
                type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES_SUCCESS,
                payload: categories
            })
        } catch (error) {
            alert(error.toString());
            dispatch({
                type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES_FAILURE,
                payload: error
            })
        }
    }
}