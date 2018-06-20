import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import { Auth } from './AuthService';
import logo from '../images/Logo.svg';
import { Form, Segment, Grid, Header, Image, Message} from 'semantic-ui-react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false,
            user: '',
            pass: '',
            isOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };


    handleSubmit(event) {
        let user = this.state.user;
        let pass = this.state.pass;
        this.login(user, pass);
        event.preventDefault();
    };


    handleOpen = () => {
        this.setState({ isOpen: true });
        this.timeout = setTimeout(() => {
            this.setState({ isOpen: false })
        }, 2500)
    };

    handleClose = () => {
        this.setState({ isOpen: false });
        clearTimeout(this.timeout)
    };


    login = (user, pass) => {
        Auth.authenticate(user, pass).then((response) => {
            if (response === undefined) {
                this.handleOpen();
                this.setState({user:'', pass:''});
            }
            this.setState({redirectToReferrer: true});
        })
    };


    render() {
        const {from} = this.props.location.state || {from: {pathname: "/"}};
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }

        return (
            <div className='login-form'>

                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            <Image src={logo} /> Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' name='user' type='userName' iconPosition='left' placeholder='UserName' value={this.state.user} onChange={this.handleChange} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='pass'
                                    value={this.state.pass}
                                    onChange={this.handleChange}
                                />

                                <Form.Button color='green' fluid size='large' type='submit'>
                                    Login
                                </Form.Button>
                            </Segment>
                        </Form>
                        {/*<Message>*/}
                            {/*Request a Login*/}
                        {/*</Message>*/}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

