import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import BookSearchForm from './BookSearchForm';

const Header = ({ setCurrentPage }) => (
  <Navbar className="header">
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <BookSearchForm setCurrentPage={setCurrentPage} />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
