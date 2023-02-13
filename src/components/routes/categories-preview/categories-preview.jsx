import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Product from '../../product/product'
import { selectCategories } from '../../../store/categories/categories.selector'

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);
    const categoriesMap = categories.reduce(
        (acc, { title, items }) => {
          acc[title.toLowerCase()] = items;
          return acc;
        },
        {}
      );

    return (
        <>
            {
                Object.keys(categoriesMap).map((title, i) => (
                    <CategoryPreviewContainer key={i}>
                        <Link to={`/shop/${title}`}>
                            <Title>{title.toUpperCase()}</Title>
                        </Link>
                        <Preview>
                            {
                                categoriesMap[title].map((p, i) => (
                                    <span key={i}>
                                        {i < 4 && <Product product={p} />}
                                    </span>
                                ))
                            }
                        </Preview>
                    </CategoryPreviewContainer>
                ) )
            }   
        </>
    )
}

export default CategoriesPreview 

