/* eslint-disable camelcase */
import React from 'react';
import { Card } from 'react-bootstrap';
import BookCover from '../images/no_cover.png';

const BookCard = (props) => {
  const { title, cover_i, authors } = props;

  const cover = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : BookCover;

  return (
    <Card className="book-card">
      <Card.Img src={cover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{authors}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
