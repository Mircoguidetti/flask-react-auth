import uuid from 'uuid';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { startGetUsers } from '../../actions/user.actions';
import ListUser from './ListUser';

const Users = (props) => {

    useEffect(() => {
        props.startGetUsers(props.auth.user.token)
    },[])

    return (
        <div>
            <h1>List of users</h1>
            {
                props.users.map(user => {
                    return <ListUser key={user.public_id} {...user}/>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    startGetUsers: (token) => dispatch(startGetUsers(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);