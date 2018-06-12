import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Auth } from './AuthService'
import { Container, Form, Segment } from 'semantic-ui-react'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false,
            user: '',
            pass: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event)
        {
            this.setState({[event.target.name]: event.target.value});
        };


        handleSubmit(event)
        {
            let user = this.state.user;
            let pass = this.state.pass;
            this.login(user, pass);
            event.preventDefault();
        };



        login = (user, pass) => {
            Auth.authenticate( user, pass).then(() => {
                this.setState({redirectToReferrer: true});
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
                <Container width={4}>
                <h2>Welcome to Small Shop Inventory Please Login</h2>
                <Segment inverted>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input required width={16} name='user' value={this.state.user} label='User Name' type='userName' placeholder={"User Name"} onChange={this.handleChange}  />
                        <Form.Input required width={16} name='pass' value={this.state.pass} label='Password' type='password' placeholder={"Password"} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Button type='submit'>Log in</Form.Button>
                </Form>
                </Segment>
                </Container>
            </div>
        );
    }

}