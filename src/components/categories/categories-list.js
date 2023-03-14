import { useSelector } from 'react-redux';

import { DUMMY_CATEGORIES } from '../../data/DUMMY_CATEGORIES'
import CategoryItem from './category-item';
import { selectFeatured } from '../../store/products/products.selector';

import { CategoriesContainer } from './categories-list.styles';

const CategoryList = () => {
  const featuredArr = useSelector(selectFeatured);
  

  return (
    <>
      {
        featuredArr.map(el => (
          <li key={el.id}>{el.id} {JSON.stringify(el.featured)}</li>
        ))
      }

      <CategoriesContainer>
          { DUMMY_CATEGORIES.map( (el, i) => (
              <CategoryItem category={el} key={i} />
          )) }
      </CategoriesContainer>
    </>
  );
}

export default CategoryList;
