import React from "react"
import './header.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"

import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {createStructuredSelector} from "reselect"

const Header = ({currentUser, cartHidden}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/' className='option'>CONTACT</Link>
            {
                currentUser ?
                    (
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>

                    ) : (
                        <Link className='option' to='/sign-in'>SIGN IN</Link>
                    )
            }
            <CartIcon/>
        </div>
        {
            !cartHidden && <CartDropdown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)