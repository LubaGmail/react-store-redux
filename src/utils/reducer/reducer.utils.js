const createAction = (type, payload) => {

    /**          -- type and payload logs as:
        categories/SET_CATEGORIES_MAP 
        {hats: Array(9), jackets: Array(5), mens: Array(6), ...
     */

    return ({ type, payload });
}

export default createAction
