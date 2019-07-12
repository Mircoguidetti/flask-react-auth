import React from 'react';
import { NavLink } from 'react-router-dom';

import Logout from './auth/Logout';
 
const Header = () => (
    <header>
        <Logout />
        <NavLink to='/users'>Users</NavLink>
    </header>
);

export default Header;