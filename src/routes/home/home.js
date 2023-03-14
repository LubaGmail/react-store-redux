import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../../components/products/products-list.jsx';
import { PRODUCTS_ACTION_TYPES } from '../../store/products/products.types';
import { getAllProducts } from '../../utils/firebase/firebase';

/**
  <Route path='/' element={<Home />} >
    <Route path='toys' element={<Toys />} />
 */
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async() => {
      const products = await getAllProducts();
      dispatch({
        type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS,
        payload: products
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
