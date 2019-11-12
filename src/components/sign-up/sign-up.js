import React, {useState} from 'react';
import {connect} from "react-redux"

import './sign-up.scss'
import {signUpStart} from "../../redux/user/user.actions"

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button"

const SignUp = ({signUpStart, error}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert(`Passwords don't match`)
            return
        }

        signUpStart({displayName, email, password})
    }

    const handleChange = event => {
        const {name, value} = event.target

        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <div className='error'>
                    {
                        error
                            ? error.message
                            : ''

                    }
                </div>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    error: state.user.error

})

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);