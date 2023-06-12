import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth }
    from '../../utils/firebase/firebase';
import InputForm from '../input-form/input-form';

import USER_ACTION_TYPES from '../../store/user/user.types';
import { selectCurrentUser } from '../../store/user/user.selector'

import { SignInContainer, ButtonDiv, SigninButton, GoogleButton } from './signin-form.styles'

const SigninForm = () => {
    const defaultFields = {
        email: '',
        pass: ''
    };
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, pass } = formFields;
    
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
        
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields({
            ...formFields,
            [name]: value.trim()
        })
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user
        })
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        const { email, pass } = formFields;

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, pass);
            dispatch({
                type: USER_ACTION_TYPES.SET_CURRENT_USER,
                payload: user
            })
         
        } catch (error) {
            throw new Error(error.toString());
        };
  
        setFormFields(defaultFields);    
    }

    return (
        <>
            
            <SignInContainer>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password or with your Google account</span>
              
                { currentUser && (
                    <div>
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </div>
                ) } 
                          
                <form onSubmit={handleSubmit}>
                    <InputForm id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        data-testid='email-input'
                        disabled={currentUser}
                    />

                    <InputForm id='pass'
                        label='Password'
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                        data-testid='pass-input'
                        disabled={currentUser}
                    />

                    <ButtonDiv>
                        <SigninButton
                            onClick={handleSubmit} disabled={currentUser}
                            data-testid='signin-button'
                        >
                            Sign In
                        </SigninButton>
                        <GoogleButton 
                            onClick={logGoogleUser} disabled={currentUser}
                            data-testid='google-button'
                        >
                            Google Sign In
                        </GoogleButton>
                    </ButtonDiv>
                </form>

            </SignInContainer>
        </>
    )
}

export default SigninForm;
