import {
    BaseButton,
    GoogleButton,
    ProductButton,
    CheckoutButton,
    DisabledButton
} from "./button.styles";

export const BUTTON_TYPES = {
    base: 'baseType',
    google: 'googleType',
    product: 'productType',
    checkout: 'checkoutType',
    disabled: 'disabledType'
}

const getButton = (buttonType = BUTTON_TYPES.base) => {
    return (
        {
            [BUTTON_TYPES.base]: BaseButton,
            [BUTTON_TYPES.google]: GoogleButton,
            [BUTTON_TYPES.product]: ProductButton,
            [BUTTON_TYPES.checkout]: CheckoutButton,
            [BUTTON_TYPES.disabled]: DisabledButton,
        }[buttonType]     // 'googleType'  
    )
}

//   <Button buttonType='googleType'
const Button = ({ children, buttonType, onclick }) => {
    const CustomButton = getButton(buttonType)
    
    return (
        <CustomButton onClick={onclick}
        >
            {children}
        </CustomButton>
    )
}

export default Button

