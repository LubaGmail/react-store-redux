import { useDispatch, useSelector } from 'react-redux'

import { CART_ACTION_TYPES } from '../../store/cart/cart.types'
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import './product-item.styles.scss'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addCartItem = (product) => {
    dispatch({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: addItemToCart(product, cartItems)
    })
}

  return (
    <div className='container'>
        <div>
          <img src={product.imageUrl}
              alt={product.name}
          />
        <button className='btn' onClick={ () => addCartItem (product)}
          >Add To Cart
        </button>
        </div>

        <h2>{product.name}</h2>

    </div>
  );
}

export default ProductItem;
