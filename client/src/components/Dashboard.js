import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

import { startLogout } from '../actions/auth.actions';

const Dashboard = (props) => {
    const handleLogout = () => {
        props.location.message = ''
        props.startLogout()
    }
    return (
        <div>
            <h1>Dashboard</h1>
            {props.auth.loggedIn  ? 
                <span  onClick={handleLogout}>Logout</span>:
                <Link to='/login'>Login</Link> 
            }
            <p>{props.location.message && props.location.message}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

