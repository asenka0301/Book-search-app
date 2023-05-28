/* eslint-disable camelcase */
import React from 'react';
import BookCover from '../images/no_cover.png';

const MAX_TITLE_LENGTH = 64;

const Book = (props) => {
  const { title, cover_i, authors } = props;
  const titleClipped = title.length > MAX_TITLE_LENGTH ? `${title.slice(0, MAX_TITLE_LENGTH - 3)}...` : title;
  const cover = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : BookCover;
  const authorsFormatted = authors ? authors.join(', ') : '-';

  return (
    <div className="book-item d-flex flex-column justify-content-between">
      <div className="book-item-img">
        <img src={cover} alt="cover" />
      </div>
      <div className="book-item-info text-center h-100">
        <div className="book-item-info-item title fw-7 fs-18">
          <span title={title}>{titleClipped}</span>
        </div>
        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Автор: </span>
          <span>{authorsFormatted}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
