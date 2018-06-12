import React from "react";
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { Modal } from 'semantic-ui-react'

const Auth = {
    isAuthenticated: false,
    authenticate(user, pass) {
        console.log(user, pass)
        return fetch(`https://e4adfd22.ngrok.io/auth`, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: `grant_type=password&UserName=${user}&password=${pass}`,
            credentials: "same-origin"
        }).then(response => {
            if (!response.ok) {
                return (
                    <Modal>
                        <Modal.Header>Unable to login</Modal.Header>
                    </Modal>
                )
            }
            this.isAuthenticated = true;
            return response
            })
            .then(results => results.json())
            .then(results => {sessionStorage.setItem('token', results.access_token)})
    },

    signout(cb)
        {
            this.isAuthenticated = false;
            sessionStorage.removeItem('token');
            setTimeout(cb, 0); // fake async
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