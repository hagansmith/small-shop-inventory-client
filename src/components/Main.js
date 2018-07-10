import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './Index'
import Products from './Products/Products'
import Login from './Authentication/Login'
import {PrivateRoute} from './Authentication/AuthService'

export default class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <PrivateRoute exact path="/" component = {Index}/>
                    <PrivateRoute path='/products' component={Products}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </main>
        )
    }
}
