import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage"
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {auth, createUserProfileDocument} from "./firebase/firebase"


class App extends Component {
    unsubscribeFromAuth = null;

    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                    console.log (
                        ' this.state',  this.state,
                    );
                })
            } else  {
                this.setState({currentUser: userAuth})
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/sign-in' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
