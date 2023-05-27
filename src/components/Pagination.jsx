/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';
import useLoad from '../hooks';

const Pagination = ({ booksPerPage, allBooks, paginate }) => {
  const load = useLoad();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allBooks.length / booksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        { !load.loading && pageNumbers.map((number) => (
          <li className="page-item" key={_.uniqueId()}>
            <a href="#" className="page-link" onClick={() => paginate(number)}>{number}</a>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default Pagination;
