import React from 'react';

import './sign-in.scss';

import {signInWithGoogle, auth} from "../../firebase/firebase"
import FormInput from '../form-input/form-input';
import CustomButton from "../custom-button/custom-button"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'

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

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});

        } catch (e) {
            console.error(e)
        }

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
        console.log(
            'this.props.currentUser ', this.props.currentUser,
            'this.state.justLoggedIn', this.state.justLoggedIn,
            'prevProps ', prevProps,
        );
    }

    render() {
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
                                signInWithGoogle()
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

export default connect(mapStateToProps)(SignIn)