import React from 'react';
import logo from '../images/Logo.svg';
import MainNav from './Nav.js';
import { Image, Segment, Sticky } from 'semantic-ui-react';


const Head = () => {
    return (
        <Segment piled>
        <header className="App-header">
            <Image src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Small Shop <span className="module">| inventory</span></h1>
            <MainNav/>
        </header>
        </Segment>
    )
};

export default Head;