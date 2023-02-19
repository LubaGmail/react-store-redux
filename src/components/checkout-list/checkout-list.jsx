import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotalCost } from '../../store/cart/cart.selector'
import CheckoutItem from '../checkout-item/checkout-item'

import { CheckoutContainer } from "./checkout-list.styles"

const CheckoutList = () => {
    const cartItems = useSelector(selectCartItems)
    const totalCost = useSelector(selectCartTotalCost)
    
    return (
        <>
            <CheckoutContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total Cost: </th>
                            <td colSpan={4}>${totalCost}</td>
                        </tr>
                    </tfoot>
                </table>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutList