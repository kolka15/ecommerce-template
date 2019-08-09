import React from "react"
import './header.scss'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase"
import CartIcon from "../cart-icon/cart-icon"
import CartDropdown from "../cart-dropdown/cart-dropdown"

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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)