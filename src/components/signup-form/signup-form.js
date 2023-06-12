import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import InputForm from '../input-form/input-form'

import { SignUpContainer, ButtonDiv, ClearSpan, SignupButton } from './signup-form.styles'

const SignupForm = () => {
    const defaultFields = {
        displayName: '',
        email: '',
        pass: '',
        confirmPass: ''
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const { displayName, email, pass, confirmPass } = formFields;
    const currentUser = 'abc';
         
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields( {
            ...formFields,
            [name]: value.trim()
        } )
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()
       
        if (pass !== confirmPass) {
            alert('password and confirmPassword must be equal.')
            return
        }
        try {
            // Athentication record is created in the Firebase with accessToken
            const {user} = await createAuthUserWithEmailAndPassword(email, pass, confirmPass)
            handleReset()
        } catch (error) {
            alert(error.toString())
        }
    }

    const handleReset = () => {
        setFormFields(defaultFields)
    }

    return (
        <>
            <SignUpContainer>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>

                { currentUser && (
                    <div>
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </div>
                ) } 
                
                <form onSubmit={handleSubmit}>
                    <InputForm id='displayName'
                        label='Display Name'
                        type='text'
                        name='displayName'
                        value={displayName} 
                        onChange={handleChange}
                        minLength={2}
                        required
                        data-testid='display-name-testid'
                    />

                    <InputForm id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                        data-testid='email-testid'
                    />

                    <InputForm id='pass'
                        label='Password'
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                        required
                        data-testid='pass-testid'
                    />

                    <InputForm id='confirmPass'
                        type='password'
                        label='Confirm Password'
                        name='confirmPass'
                        value={confirmPass}
                        onChange={handleChange}
                        minLength={6}
                        required
                        data-testid='confirm-pass-testid'
                    />

                    <ButtonDiv>
                        <SignupButton
                            onClick={handleSubmit} disabled={currentUser}
                            data-testid='signup-button-testid'
                        >
                            Sign Up
                        </SignupButton>
                        <ClearSpan onClick={handleReset}
                            data-testid='clear-button-testid'
                        >
                            Clear
                        </ClearSpan>
                    </ButtonDiv >
                </form>

            </SignUpContainer>
        </>
    )
}

export default SignupForm;