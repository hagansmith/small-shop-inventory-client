import React from "react";
import {
    Route,
    Redirect,
    withRouter,
    Link
} from "react-router-dom";
import { authorize, logOut } from './Data';
import Login from "./Login";

const Auth = {
    isAuthenticated() {
        if (!sessionStorage.getItem('token'))
            return false;

        return true;
    },

    authenticate(user, pass) {
        return authorize(user, pass)
            .then(response => {
                    if (!response.ok ) {
                        return response;
                    }
                    return response
                })
                    .then(results => results.json())
                    .then(results => {
                        sessionStorage.setItem('token', results.access_token);
                        this.isAuthenticated = true;
                    })
    },

    signout() {
        sessionStorage.removeItem('token');
        this.isAuthenticated = false;
        return <Login/>
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        Auth.isAuthenticated ? (
                <button onClick={() => {
                        Auth.signout(() => history.push("/login"))
                    }}
                >
                    Sign out
                </button>
        ) : (
            ''
        )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export { Auth, AuthButton, PrivateRoute }