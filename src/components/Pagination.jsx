/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';

const Pagination = ({ booksPerPage, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  const allBooks = useSelector((state) => {
    const { books } = state.booksReducer;
    return books;
  });

  for (let i = 1; i <= Math.ceil(allBooks.length / booksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        { pageNumbers && pageNumbers.map((number) => (
          <li className="page-item" key={_.uniqueId()}>
            <a
              href="#"
              className={cn(
                'pagination-item',
                'page-link',
                'fs-16',
                {
                  'active-page': number === currentPage,
                },
              )}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </a>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default Pagination;
