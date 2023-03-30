import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../../components/featured/featured-list.jsx';
import { FEATURED_ACTION_TYPES } from '../../store/featured/featured.types';
import { getFeaturedProducts } from '../../utils/firebase/firebase';
import { createAction } from '../../utils/reducer/reducer.utils.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async() => {
      const featured = await getFeaturedProducts();

      // const action = createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, featured);
      // dispatch(action)

      dispatch({
        type: FEATURED_ACTION_TYPES.SET_FEATURED,
        payload: featured
      })
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
