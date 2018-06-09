import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
        //  /login http://localhost:49892/authenticate
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100); // fake async
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