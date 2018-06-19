import React from "react";
import {
    Route,
    Redirect,
    withRouter,
} from "react-router-dom";
import { authorize, logOut } from './Data';

const Auth = {
    isAuthenticated: false,

    // checkToken() {
    //     if (!sessionStorage.getItem('token')) {
    //         isAuthenticated: false
    //     }
    //     else{
    //         isAuthenticated: true
    //     }
    // },

    authenticate(user, pass) {
        return authorize(user, pass)
            .then(response => {
                if (!response.ok) {
                    this.isAuthenticated = false;
                    return <Redirect to={{pathname: '/login'}}/>
                }
                this.isAuthenticated = true;
                return response
            })
            // this gets run even on failure resulting in an error
            .then((results) => results.json())
                .then(results => {
                sessionStorage.setItem('token', results.access_token);
            })
    },

    signout() {
        let token = sessionStorage.getItem('token');
        if (!token)
            return <Redirect to={'/login'} />;
        else {
            return logOut(token).then(response => {
                if (!response.ok) {
                    return response;
                }
                sessionStorage.removeItem('token');
                this.isAuthenticated = false;
                return <Redirect to={{pathname: '/login'}}/>
            })
        }
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        Auth.isAuthenticated ? (
                <button onClick={() => {
                        Auth.signout(() => history.push("/login"));
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