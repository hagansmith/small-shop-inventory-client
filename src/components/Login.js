import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import { Auth } from './AuthService'
import { Container, Button, Form, Segment } from 'semantic-ui-react'

export default class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <Container width={4} textAlign='center'>
                <h2>Welcome to Small Shop Inventory Please Login</h2>
                <Segment inverted>
                <Form inverted onSubmit{...this.login}>
                    <Form.Group>
                    <Form.Input width={16} label='User Name' type='userName' />
                    <Form.Input width={16} label='Password' type='password' />
                    </Form.Group>
                    <Form.Button onClick={this.login}>Log in</Form.Button>
                </Form>
                </Segment>
                </Container>
            </div>
        );
    }

}