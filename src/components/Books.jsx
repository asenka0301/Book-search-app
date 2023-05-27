/* eslint-disable camelcase */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import BookCard from './BookCard';

const Books = ({ currentPage, booksPerPage, sortedBy }) => {
  const AllBooks = useSelector((state) => {
    const { books } = state.booksReducer;
    return books;
  });

  const lastIndex = currentPage * booksPerPage;
  const firstIndex = lastIndex - booksPerPage;

  const sortBooks = {
    byTitle(data) {
      return _.sortBy(data, ['title']);
    },
    byAuthor(data) {
      return _.sortBy(data, ['authors_name']);
    },
  };

  return (
    <Container className="h-100 mt-5">
      <Row>
        {
        AllBooks && sortBooks[sortedBy](AllBooks)
          .slice(firstIndex, lastIndex)
          .map(({ author_name, title, cover_i }) => (
            <Col lg={3} md={3} sm={6} key={_.uniqueId()}>
              <BookCard authors={author_name} title={title} cover_i={cover_i} />
            </Col>
          ))
      }
      </Row>
    </Container>
  );
};

export default Books;
