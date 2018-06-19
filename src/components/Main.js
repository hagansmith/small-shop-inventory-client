import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Login from './Login'
import {PrivateRoute} from './AuthService'

export default class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <PrivateRoute exact path="/" component = {Home}/>
                    <PrivateRoute path='/products' component={Products}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </main>
        )
    }
}
