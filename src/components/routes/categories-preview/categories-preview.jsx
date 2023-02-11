import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { CategoriesContext } from '../../../contexts/categories-context';
import Product from '../../product/product'
import { selectCategoriesMap } from '../../../store/categories/categories.selector'

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap);

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

