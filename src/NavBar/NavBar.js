import React from 'react';
import {Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Nav
        fill
        variant='pills'
        className='nav-bar'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href='/app'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/filterName'>Names</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/userDetail'>User Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/context'>Context</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}
export default NavBar;