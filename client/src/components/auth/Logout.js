import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../../actions/auth.actions';

const Logout = (props) => {

    const handleLogout = () => props.startLogout()

    return (
        <Link to='' onClick={handleLogout}>Logout</Link>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Logout);