import {
    BaseButton,
    GoogleButton,
    ProductButton,
    CheckoutButton
} from "./button.styles";

export const BUTTON_TYPES = {
    base: 'baseType',
    google: 'googleType',
    product: 'productType',
    checkout: 'checkoutType'
}

const getButton = (buttonType = BUTTON_TYPES.base) => {
    return (
        {
            [BUTTON_TYPES.base]: BaseButton,
            [BUTTON_TYPES.google]: GoogleButton,
            [BUTTON_TYPES.product]: ProductButton,
            [BUTTON_TYPES.checkout]: CheckoutButton,
        }[buttonType]     // 'googleType'  
    )
}

//   <Button buttonType='google'
const Button = ({ children, buttonType }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default Button

