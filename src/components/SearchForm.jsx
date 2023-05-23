import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = () => (
  <Form className="d-flex justify-content-end">
    <Form.Control
      type="search"
      placeholder="Aвтор или название книги"
      className="me-2"
      autoFocus
    />
    <Button variant="success" type="submit">Поиск</Button>
  </Form>
);

export default SearchForm;
