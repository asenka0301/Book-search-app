import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import BookSearchForm from './BookSearchForm';

const Header = () => (
  <Navbar className="header">
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <BookSearchForm />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
