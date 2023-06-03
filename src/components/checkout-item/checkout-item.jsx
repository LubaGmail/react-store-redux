import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectCartItems } from "../../store/cart/cart.selector"
import { reduceItemQuantity, increaseItemQuantity, removeItemFromCart } from '../../store/cart/cart.actions'
import { CART_ACTION_TYPES } from '../../store/cart/cart.types'

import { ImageContainer, ClickableSpan, ClickableTd } from './checkout-item.styles'

const CheckoutItem = ({ item }) => {
   
    const { name, imageUrl, price, quantity } = item
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const quantityRef = useRef()
  
    const subtractQuantity = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: reduceItemQuantity(item, cartItems)
        })
    }
    
    const addQuantity = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: increaseItemQuantity(item, cartItems)
        })
    }

    const handleRemoveItem = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: removeItemFromCart(item, cartItems)
        })
    }

    return (
        <>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <td>{name}</td>
            <td >
                <ClickableSpan onClick={subtractQuantity}data-testid='lt-testid'>  &#10094; </ClickableSpan>
                <span ref={quantityRef}>{quantity}</span>
                <ClickableSpan onClick={addQuantity} data-testid='gt-testid'>  &#10095; </ClickableSpan>
            </td>
            <td>${price}</td>
            <ClickableTd  onClick={handleRemoveItem}>
                <span>&#10005;</span>
            </ClickableTd>  
        </>
    )
}

export default CheckoutItem