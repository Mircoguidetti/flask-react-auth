import React from 'react';

const ListUser = (props) => (
    <div>
        <p>Username: {props.username}</p>
        <p>Email: {props.email}</p>
    </div>
);

export default ListUser;