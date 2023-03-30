import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFeatured} from '../../store/featured/featured.selector';
import Product from '../product/product';

import { ProductsContainer, Logo } from './featured-list.styles';

const FeaturedList = () => {
  const featuredArr = useSelector(selectFeatured);
   
  return (
    <>
      <Logo>
        <Link to='/shop'>Shop Now!</Link>
      </Logo>

      <ProductsContainer>
        {
          featuredArr.map(el => (
            <li key={el.id}>
              <Product product={el} />
            </li>
          ))
        }
      </ProductsContainer>
    </>
    
  );
}

export default FeaturedList;
