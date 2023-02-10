import { createContext, useState, useEffect } from 'react';

import { getCategories } from '../utils/firebase/firebase';

export const CategoriesContext = createContext({
    categoriesMap: []
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };         

    useEffect(() => {
        const getData = async() => {
            const categoriesMap = await getCategories()
            setCategoriesMap(categoriesMap)
        }
        getData()
    }, []);
    
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};