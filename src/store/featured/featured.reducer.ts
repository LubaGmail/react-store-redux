import { FEATURED_ACTION_TYPES } from "./featured.types"; 

const INITIAL_FEATURED_STATE = {
    featured: []
}

export type Product = {
    id: number;
    name: string;
    price: number;
    featured: boolean;
    imageUrl: string;
}
export type FeaturedState = {
    featured: Product[];
}
export type FeaturedAction = {
    type: string;
    payload: Product[];
}

/**
    state:              featured: [{..}, {..}, ...]
    state.featured:     [{..}, {..}, ...]
 */

export const featuredReducer = (state: FeaturedState=INITIAL_FEATURED_STATE, action: FeaturedAction): FeaturedState => {
    const { type, payload } = action;
    console.log('state', state.featured)
    switch (type) {
        case FEATURED_ACTION_TYPES.SET_FEATURED:
            return { ...state, featured: payload }
        default:
            return state;
    }
}