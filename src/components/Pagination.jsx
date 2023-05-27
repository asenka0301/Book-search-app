/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import useLoad from '../hooks';

const Pagination = ({ booksPerPage, setCurrentPage }) => {
  const load = useLoad();
  const pageNumbers = [];

  const allBooks = useSelector((state) => {
    const { books } = state.booksReducer;
    return books;
  });

  for (let i = 1; i <= Math.ceil(allBooks.length / booksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      { !load.loading && (
      <ul className="pagination">
        { pageNumbers && pageNumbers.map((number) => (
          <li className="page-item" key={_.uniqueId()}>
            <a href="#" className="page-link" onClick={() => setCurrentPage(number)}>{number}</a>
          </li>
        )) }
      </ul>
      )}
    </Container>
  );
};

export default Pagination;
