import { FeaturedState } from "./featured.reducer";

export const selectFeatured = (state: FeaturedState) => {
    const featured = state.featured.featured;
   
    return featured;
}