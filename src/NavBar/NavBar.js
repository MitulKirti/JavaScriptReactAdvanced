import React from 'react';
import {Row, Nav, Image} from 'react-bootstrap';
import './NavBar.scss';
import nature from '../assets/nature.jpg';

const NavBar = (props) => {
    return (
      <>
      <Row>
          <Image
            src={nature}
            alt='nature'
            className='nature-img'
          />
        <Nav
        fill
        variant='pills'
        className='nav-bar'
        onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
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
      </Row>
      <Row>
      <strong className='title-intro'>{props.title}</strong>
      </Row>
      </>
    );
}
export default NavBar;