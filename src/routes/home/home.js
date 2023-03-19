import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../../components/products/products-list.jsx';
import { fetchProductsStartAsync } from '../../store/products/products.actions.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStartAsync() )
  }, [dispatch])

  return (
    <>
       <ProductsList />
    </>
     
  );
}

export default Home
