import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFeatured } from '../../store/products/products.selector';
import ProductItem from './product-item';

import { ProductsContainer } from './products-list.styles';

const ProductsList = () => {
  const featuredArr = useSelector(selectFeatured);
  
  return (
    <>
      <h3>
        <Link to='/shop'>Shop Now!</Link>
      </h3>
      <ProductsContainer>
        {
          featuredArr.map(el => (
            <li key={el.id}>
              <ProductItem product={el} />
            </li>
          ))
        }
      </ProductsContainer>
    </>
    
  );
}

export default ProductsList;
