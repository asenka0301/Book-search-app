/* eslint-disable camelcase */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Book from './Book';
import useLoad from '../hooks';

const Books = ({ currentPage, booksPerPage, sortedBy }) => {
  const load = useLoad();
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
      return _.sortBy(data, ['author_name']);
    },
  };

  return (
    <Container className="h-100 mt-4">
      {
      !load.isBooksFounded ? <div className="text-center mt-15 fs-20 fw-5">По вашему запросу книги не найдены</div>
        : (
          <div className="booklist-content grid">
            {
            sortBooks[sortedBy](AllBooks)
              .slice(firstIndex, lastIndex)
              .map(({ author_name, title, cover_i }) => (
                <Book key={_.uniqueId()} authors={author_name} title={title} cover_i={cover_i} />
              ))
            }
          </div>
        )
      }
    </Container>
  );
};

export default Books;
