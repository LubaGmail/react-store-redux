import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category'
import { getCategories } from '../../../utils/firebase/firebase'
import { setCategoriesMap } from '../../../store/categories/categories.action'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategories('categories');

            // const action = setCategoriesMap(categoriesMap);
            // dispatch(setCategoriesMap(categoriesMap));
            // const action = {
            //     type: 'categories/SET_CATEGORIES_MAP',
            //     payload: categoriesMap
            // }
            // dispatch(action)
            
            dispatch({
                type: 'categories/SET_CATEGORIES_MAP',
                payload: categoriesMap
            })
        };
    
        getCategoriesMap();
    }, [dispatch]);
    
    // App: <Route path='shop/*' element={<Shop />} />    
    //
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop