import React from "react";
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { authorize } from './Data';

const Auth = {
    isAuthenticated() {
        if (!sessionStorage.getItem('token'))
            return false;
        else
            return true;
    },

    authenticate(user, pass) {
        return authorize(user, pass)
            .then(response => {
                    if (!response.ok ) {
                        return response;
                    }
                    this.isAuthenticated = true;
                    return response
                })
                    .then(results => results.json())
                    .then(results => {
                        sessionStorage.setItem('token', results.access_token);
                    })
    },

    signout()

        {
            sessionStorage.removeItem('token');
            return this.isAuthenticated = false;
        }
};

const AuthButton = withRouter(
    ({ history }) =>
        Auth.isAuthenticated ? (
                <button onClick={() => {
                        Auth.signout(() => history.push("/"));
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