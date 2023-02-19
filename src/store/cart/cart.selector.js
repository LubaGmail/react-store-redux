export const selectCart = (state) => {
    return state.cart
}
export const selectCartItems = (state) => {
    return state.cart.cartItems
}
export const selectCartTotalCount = (state) => {
    const { cartItems } = state.cart
    const total = cartItems.reduce((accum, el) => {
        return accum += el.quantity
    }, 0)
    return total
}
export const selectIsCartOpen = (state) => {
    return state.cart.isCartOpen
}