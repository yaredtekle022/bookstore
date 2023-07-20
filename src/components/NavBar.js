import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <span className="logo">Bookstore </span>
    <ul className="nav-list">
      <li><Link to="/" className="nav-link">Books</Link></li>
      <li><Link to="/categories" className="nav-link">Categories</Link></li>
    </ul>
  </nav>
);

export default NavBar;
