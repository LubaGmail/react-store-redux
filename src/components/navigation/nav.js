import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from '../../store/user/user.selector';
import USER_ACTION_TYPES from '../../store/user/user.types';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import {
    NavContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './nav.styles';

const Nav = () => {
    const cartOpen = useSelector(selectIsCartOpen);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleSignout = async () => {
        await signOutUser();
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: null
        })
    }

    return (
        <>
            <NavContainer>
                <LogoContainer to='/'>
                    <CrownLogo />
                </LogoContainer>

                { currentUser && (
                    <NavLink>
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </NavLink>
                ) }

                <NavLinks>
                    <NavLink to='/test'>
                        TEST
                    </NavLink>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    { !currentUser && (
                        <NavLink to='/auth' className="navLink">
                            SIGN IN
                        </NavLink>
                    ) }
                    
                    { currentUser && (
                        <NavLink as='span' onClick={handleSignout} >
                            SIGN OUT
                        </NavLink>
                    ) }

                    <CartIcon />
                </NavLinks>

                { cartOpen && <CartDropdown /> }
               
            </NavContainer>
            
            <Outlet />
        </>
    )
}

export default Nav