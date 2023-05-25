import React from 'react';
import { Card } from 'react-bootstrap';
import BookCover from './no_cover.png';

const BookCard = (props) => {
  const { title, imageLinks, authors } = props;

  const cover = imageLinks ? imageLinks.smallThumbnail : BookCover;

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
