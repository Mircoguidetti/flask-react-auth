import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { verifyToken } from '../actions/auth';

class Dashboard extends Component {

    componentDidMount () {
        this.props.dispatch(verifyToken({...this.props.auth.token}));
    }
    render() {
        
       
        return (
            <div>
                <p>Token</p>
                {this.props.auth.token === '' ? 'No token': 'Token is here'}
                <h1>Dashboard</h1>
                {!this.props.auth.token ? 
                    <NavLink to='/login'>Login</NavLink> :
                    <NavLink to='/login'>Logout</NavLink>
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    };
};

export default connect(mapStateToProps)(Dashboard);

