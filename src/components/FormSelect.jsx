import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setSortedBy } from '../slice/booksSlice';

const FormSelect = () => {
  const dispatch = useDispatch();
  const sortedParam = useSelector((state) => {
    const { sortedBy } = state.booksReducer;
    return sortedBy;
  });
  console.log(sortedParam);

  const [selectValue, setSelectValue] = useState(sortedParam);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(setSortedBy(selectValue));
  };

  return (
    <div className="d-flex justify-content-end align-items-center mt-4">
      <Form.Select value={selectValue} onChange={handleChange}>
        <option>По автору</option>
        <option>По названию</option>
      </Form.Select>
    </div>
  );
};

export default FormSelect;
