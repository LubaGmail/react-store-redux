import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../../components/products/products-list.jsx';
import { PRODUCTS_ACTION_TYPES } from '../../store/products/products.types';
import { getAllProducts } from '../../utils/firebase/firebase';
import { createAction } from '../../utils/reducer/reducer.utils.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async() => {
      const products = await getAllProducts();
      
      /**
        Object
          payload: (5) [Array(9), Array(5), Array(6), Array(8), Array(7)]
          type:  "products/SET_PRODUCTS"
       */
      const action = createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, products);
      dispatch(action)

      // dispatch({
      //   type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS,
      //   payload: products
      // })
    }  
    getData();
  
  }, [dispatch])

  return (
    <>
       <ProductsList />
    </>
     
  );
}

export default Home
