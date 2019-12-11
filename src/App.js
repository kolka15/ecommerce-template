import React, {useEffect, lazy, Suspense} from 'react';
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from "./components/header/header"
import Spinner from "./components/spinner/spinner.component"

import {createStructuredSelector} from "reselect"
import {selectCurrentUser} from "./redux/user/user.selectors"
import {checkUserSession} from "./redux/user/user.actions"

const HomePage = lazy(() => import('./pages/homepage/homepage'))
const ShopPage = lazy(() => import('./pages/shop/shop'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'))


const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <Header/>
            <Switch>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/sign-in'
                           render={() => (currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>)}
                    />
                </Suspense>
            </Switch>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
