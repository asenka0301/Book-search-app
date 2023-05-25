import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import BookCard from './BookCard';

const Books = () => {
  const booksInfo = useSelector((state) => {
    const { books } = state.booksReducer;
    return books;
  });

  const sortByBookTitle = _.sortBy(booksInfo, ['title']);
  // const sortByBookAuthor = _.sortBy(booksInfo, ['authors']);

  console.log(sortByBookTitle);
  return (
    <Container className="h-100 mt-5">
      <Row>
        { booksInfo && sortByBookTitle.map(({ authors, title, imageLinks }) => (
          <Col lg={3} md={3} sm={6}>
            <BookCard authors={authors} title={title} imageLinks={imageLinks} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Books;
