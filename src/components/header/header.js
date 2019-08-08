import React from "react"
import './header.scss'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase"

const Header = ({currentUser}) => (
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
                        <>
                            <Link to='/'>{currentUser.displayName}</Link>
                            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>

                        </>) : (
                        <Link className='option' to='/sign-in'>SIGN IN</Link>
                    )
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)