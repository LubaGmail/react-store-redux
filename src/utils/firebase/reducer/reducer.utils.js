export const createAction = (type, payload) => {
    console.log('reducer.utils.type', type);
    console.log('reducer.utils.payload', payload);
    return { type, payload };
}
