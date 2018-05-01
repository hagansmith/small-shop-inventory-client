import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'

export default class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path='/products' component={Products}/>
                </Switch>
            </main>
        )
    }
}
