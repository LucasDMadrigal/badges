import React from 'react';
import logo from '../images/logo.svg'
import './styles/Navbar.css'
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <a href="/">
                    <img src={logo} alt="" />
                    <span>Platzi</span>
                    <span>Conf</span>
                </a>
            </div>
        )
    }
}

export default Navbar;
