import React from 'react';

import './sign-in.scss';

import FormInput from '../form-input/form-input';
import CustomButton from "../custom-button/custom-button"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions"


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            justLoggedIn: false
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props
        const {email, password} = this.state

        emailSignInStart(email, password)

    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    clearFormFields = () => (
        this.setState({
            email: '',
            password: '',
        })
    )

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentUser && prevProps.currentUser === null) {
            this.setState({justLoggedIn: true})
        }
    }

    render() {
        const {googleSignInStart} = this.props
        return (
            <>
                {
                    this.state.justLoggedIn && <Redirect to='/'/>
                }
                <div className='sign-in'>
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label='email'
                            required
                        />
                        <FormInput
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='password'
                            required
                        />
                        <div className='buttons'>
                            <CustomButton type='submit'> Sign in </CustomButton>
                            <CustomButton onClick={() => {
                                this.clearFormFields();
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
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)