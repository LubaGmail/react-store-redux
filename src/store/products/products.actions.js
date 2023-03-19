import { PRODUCTS_ACTION_TYPES } from "./products.types"; 
import { getAllProducts } from "../../utils/firebase/firebase";

export const fetchProductsStartAsync = () => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START,
        })
        try {
            const products = await getAllProducts();
            dispatch({
                type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_SUCCESS,
                payload: products
            })
        } catch (error) {
            alert(error.toString());
            dispatch({
                type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_FAILURE,
                payload: error
            })
        }
    }

}