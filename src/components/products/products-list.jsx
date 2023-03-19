import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFeatured, selectLoading } from '../../store/products/products.selector';
import Product from '../product/product';
import Spinner from '../spinner/spinner';

import { ProductsContainer, Logo } from './products-list.styles';

const ProductsList = () => {
  const featuredArr = useSelector(selectFeatured);
  const loading = useSelector(selectLoading);
  
  return (
    <>
      <Logo>
        <Link to='/shop'>Shop Now!</Link>
      </Logo>

      <ProductsContainer>
        {
          loading ? (
            <Spinner />
          ): (
            featuredArr.map(el => (
              <li key={el.id}>
                <Product product={el} />
              </li>
            ))
          )
        }
      </ProductsContainer>
    </>
    
  );
}

export default ProductsList;
