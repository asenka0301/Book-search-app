import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import SearchForm from './SearchForm';

const Header = () => (
  <Navbar className="header">
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <SearchForm />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
