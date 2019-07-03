import axios from 'axios';
import React, { Component } from 'react';

class Login  extends Component {
    constructor (props) {
        super(props);
        this.state = {
            token: '',
            email:'',
            password:'',
            error: ''
        };

        this.handleAuthFlow = this.handleAuthFlow.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    };
  
    handleAuthFlow (e) {
        e.preventDefault();
        const username = this.state.email;
        const password = this.state.password;
        
        if (!username) {
            return this.setState({error:'Email is required'});
        };

        if (!password) {
            return this.setState({error:'Password is required'});
        };

        axios.post('/api/login', { 
            email: username,
            password: password

        }).then((response) => {
            this.setState({token:response.data.token});
        }).catch((error) => {
            this.setState({error:error.response.data.message});
        });  
    };

    handleEmailChange (e) {
        this.setState({
            email:e.target.value
        });
    };

    handlePasswordChange (e) {
        this.setState({
            password:e.target.value
        });
    };

    render() {
        return (
            <div>
            <h1>Login</h1>
            <form onSubmit={this.handleAuthFlow}>
                <input
                    onChange={this.handleEmailChange}
                    type='text'
                    value={this.props.email} 
                    placeholder='email'
                />
                <input
                    onChange = {this.handlePasswordChange}
                    value={this.props.password}
                    type='password'
                    placeholder='password'
                />
                <button 
                    type='submit'
                >
                    Login
                </button>
            </form>
            {this.state.token}
            {this.state.error && <p>{this.state.error}</p>}
        </div>

        );
    };
};

export default Login;