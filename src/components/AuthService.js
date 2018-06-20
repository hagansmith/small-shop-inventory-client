import React from "react";
import {
    Route,
    Redirect,
    withRouter,
} from "react-router-dom";
import { authorize, logOut } from './Data';

const Auth = {
    isAuthenticated: false,

    checkToken() {
        if (!localStorage.getItem('token')) {
            Auth.isAuthenticated = false;
            return false;
        }
        else{
            Auth.isAuthenticated = true;
            return true;
        }
    },

    authenticate(user, pass) {
        return authorize(user, pass)
            .then(response => {
                if (!response.ok) {
                    Auth.isAuthenticated = false;
                    console.log(Auth.isAuthenticated);
                    return <Redirect to={{pathname: '/login'}}/>
                }
                return response
            }).then((results) => results.json())
                .then(results => {
                localStorage.setItem('token', results.access_token);
                Auth.isAuthenticated = true;
            })
    },

    signOut() {
        let token = localStorage.getItem('token');
        if (!token)
            return (<Redirect to={'/login'} />);
        else {
            return logOut(token).then(response => {
                if (!response.ok) {
                    return response;
                }
                localStorage.removeItem('token');
                Auth.isAuthenticated = false;
                return (<Redirect to={{pathname: '/login'}}/>);
            })
        }
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        Auth.isAuthenticated ? (
            <button onClick={() => {
                Auth.signOut(() => history.push("/login"));
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
            Auth.checkToken() ? (
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