import React from 'react';
import '../../App.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.svg'

const Header = (props) => {
    return <header className='header'>

        <div className="header_container">
            <div className="header__right">
                <div className="header__logo">
                    <img src={logo}/>
                </div>
            </div>
            <>
                {props.isAuth
                    ? <div className='header__left'>
                        <div className='header__user-name'>
                            {props.login}
                        </div>
                        <div className='header__user-img'>
                            <img className='header__user-profile-img' src='https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png'/>
                        </div>
                        <button className="btn" onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink className="btn" to={'/login'}>Login</NavLink>}
            </>

        </div>
    </header>
}

export default Header;

