import React from 'react';
import { Container } from 'react-bootstrap';
import BookCard from './BookCard';

const Books = () => (
  <Container className="h-100 d-flex books">
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
  </Container>
);

export default Books;
