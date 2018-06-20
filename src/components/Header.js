import React from 'react';
import logo from '../images/Logo.svg';
import MainNav from './Nav.js';
import {Sticky, Image} from 'semantic-ui-react';


const Head = () => {
    return (
        <header className="App-header">
            <Image src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Small Shop <span className="module">| inventory</span></h1>
            <MainNav/>
        </header>
    )
}

export default Head;