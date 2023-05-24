import React from 'react';
import { Card } from 'react-bootstrap';

const BookCard = () => (
  <Card>
    <Card.Img />
    <Card.Footer>
      <h3>Title</h3>
      <p>author</p>
    </Card.Footer>
  </Card>
);

export default BookCard;
