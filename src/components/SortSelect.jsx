import React from 'react';
import { Form } from 'react-bootstrap';

const SortSelect = ({ sortedBy, setSortedBy }) => {
  const handleChange = (e) => {
    setSortedBy(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form.Label className="text-nowrap m-0 mx-3">Сортировать по</Form.Label>
      <Form.Select className="fs-16" value={sortedBy} onChange={handleChange}>
        <option value="byAuthor">автору</option>
        <option value="byTitle">названию</option>
      </Form.Select>
    </div>
  );
};

export default SortSelect;
