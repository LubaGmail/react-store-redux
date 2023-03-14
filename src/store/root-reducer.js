// Single Point of Truth
import { combineReducers } from 'redux';

import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { productsReducer } from './products/products.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  products: productsReducer
});
