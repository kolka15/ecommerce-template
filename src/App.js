import React, {Component} from 'react';
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


import HomePage from "./pages/homepage/homepage"
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import CheckoutPage from "./pages/checkout/checkout"

import {createStructuredSelector} from "reselect"
import {selectCurrentUser} from "./redux/user/user.selectors"
import {checkUserSession} from "./redux/user/user.actions"

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {checkUserSession} = this.props
        checkUserSession()
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/sign-in'
                           render={() => (this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>)}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
