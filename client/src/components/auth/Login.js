import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setToken } from '../../actions/auth';

class Login  extends Component {
    constructor (props) {
        super(props);
        this.state = {
            token: '',
            email:'',
            password:'',
            error: '',
            redirect: false
        };

        this.handleAuthFlow = this.handleAuthFlow.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    };

    renderRedirect () {
        if (this.state.redirect) {
            return <Redirect to='/' />
        };
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
            this.props.dispatch(setToken({token:response.data.token}));
            this.setState({error:''});
            this.setState({redirect:true});
            
        }).catch((error) => {
            this.setState({error:error.response.data.message});
            this.props.dispatch(setToken({token:''}));
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
            { this.renderRedirect() }
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Login);