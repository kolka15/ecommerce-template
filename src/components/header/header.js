import React from "react"
import './header.scss'
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
// import {auth} from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"

import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {createStructuredSelector} from "reselect"
import {signOutStart} from "../../redux/user/user.actions"

import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles"

const Header = ({currentUser, cartHidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/'>CONTACT</OptionLink>
            {
                currentUser ?
                    (
                        <OptionLink to='' as='div' onClick={signOutStart}>SIGN OUT</OptionLink>

                    ) : (
                        <OptionLink to='/sign-in'>SIGN IN</OptionLink>
                    )
            }
            <CartIcon/>
        </OptionsContainer>
        {
            !cartHidden && <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)