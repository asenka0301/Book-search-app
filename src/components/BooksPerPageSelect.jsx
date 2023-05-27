import React from 'react';
import { Form } from 'react-bootstrap';

const BooksPerPageSelect = ({ booksPerPage, setBooksPerPage, setCurrentPage }) => {
  const handleChange = (e) => {
    setBooksPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="d-flex align-items-center mx-2">
      <Form.Label className="m-0 mx-1">Показывать по</Form.Label>
      <Form.Select className="page-select" value={booksPerPage} onChange={handleChange}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Form.Select>
    </div>
  );
};

export default BooksPerPageSelect;
