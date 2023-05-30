import React from "react"; 
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import { rootReducer } from "../../store/root-reducer";

export function renderWithProviders (
    comp,
    {
        preloadedState = {},
        store = legacy_createStore(rootReducer, preloadedState)
    } = {}
) {
    const Wrapper = ({ children }) => {
        return (
            <Provider store={store} >
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        )
    }

    return {
        store,
        ...render(comp, { wrapper: Wrapper })
    };
}