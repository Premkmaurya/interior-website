import React from 'react';
import { RiMenu2Fill, RiShoppingCart2Line, RiUserLine } from '@remixicon/react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <span className="navbar__menu-icon"><RiMenu2Fill /></span>
      </div>
      <div className="navbar__logo">Norrlands trä</div>
      <div className="navbar__actions">
        <span className="navbar__actions-icon"><RiUserLine /></span>
        <span className="navbar__actions-icon"><RiShoppingCart2Line /></span>
      </div>
    </nav>
  );
};

export default Nav;