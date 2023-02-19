import { useContext } from 'react';
import { useDispatch , useSelector} from 'react-redux';

import { CartContext } from '../../contexts/cart-context';
import { selectCart, selectCartItems } from '../../store/cart/cart.selector';
import { CART_ACTION_TYPES } from '../../store/cart/cart.types';
import { addItemToCart } from '../../store/cart/cart.actions';

import { ProductContainer, FooterContainer } from './product.styles';

const Product = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItem } = useContext(CartContext)

    const cart = useSelector(selectCart)
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
        
    /**
        items: 
            [{…}] 
                0:
                    id: 4,
                    ...
                length: 1,
                [[Prototype]]: Array(0)
    */

    const addCartItem = (product) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: addItemToCart(product, cartItems)
        })
    }

    return (
     
        <ProductContainer>
            <img src={imageUrl} alt={name}
            />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </FooterContainer>
            <button onClick={ () => addItem (product)}
            >
                Add to cart
            </button>

            <p onClick={ () => addCartItem (product)}
            >
                addCartItem
            </p>
        </ProductContainer>

    )
}

export default Product

