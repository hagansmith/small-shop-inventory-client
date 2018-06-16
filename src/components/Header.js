import React from 'react';
import logo from '../images/store.png';
import MainNav from './Nav.js';


const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Small Shop <span className="module">| inventory</span></h1>
            <MainNav/>
        </header>
    )
}

export default Header;