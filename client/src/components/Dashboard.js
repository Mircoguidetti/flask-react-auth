import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <NavLink to='/login'>Login</NavLink>
    </div>
);

export default Dashboard;

