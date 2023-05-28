/**
    state = {categories: {…}, cart: {…}}                               obj of objs
      slice = state.categories = {categories: Array(5)}                obj of Array
        categories = state.categories.categories = (5) [{…}, {…}, {…}, {…}, {…}]    Array of objs: title, items
 */
        
export const selectCategoriesSlice = (state) => {
  return state.categories;
}

export const selectCategoriesArray = (state) => {
  return state.categories.categories;
}

export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories.reduce (
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      }, {}
  );
  return categoriesMap;
}

export const selectState = (state) => {
  return state;
}


