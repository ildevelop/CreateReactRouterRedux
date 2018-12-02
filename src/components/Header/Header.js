import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/make-jubbot">Make Jubbot</NavLink>
      </div>
    );
  }
}

export default Header;
