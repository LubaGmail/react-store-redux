import { useSelector } from "react-redux";

import SigninForm from '../../components/signin-form/signin-form'
import SignupForm from '../../components/signup-form/signup-form'
import {selectCurrentUser} from '../../store/user/user.selector';

import { AuthContainer } from './auth.styles'

/**
    <Route path='auth' element={<Auth />} />
*/
const Auth = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <AuthContainer>
            <SigninForm />
            {!currentUser && <SignupForm />}
            
        </ AuthContainer>
    )
}

export default Auth
