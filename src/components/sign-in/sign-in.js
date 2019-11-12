import React, {useState} from 'react';

import './sign-in.scss';

import FormInput from '../form-input/form-input';
import CustomButton from "../custom-button/custom-button"
import {connect} from "react-redux"
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions"


const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials


    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password)

    };

    const handleChange = event => {
        const {value, name} = event.target

        setCredentials({...userCredentials, [name]: value})
    };

    const clearFormFields = () => (
        this.setState({
            email: '',
            password: '',
        })
    )

    return (
        <>
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={() => {
                            clearFormFields();
                            googleSignInStart()
                        }} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        </>
    );

}



const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn)