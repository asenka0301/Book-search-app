import React from 'react';

const BooksPerPageSelect = ({ booksPerPage, setBooksPerPage, setCurrentPage }) => {
  const handleChange = (e) => {
    setBooksPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <select value={booksPerPage} onChange={handleChange}>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
};

export default BooksPerPageSelect;
