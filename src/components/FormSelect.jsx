import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortedBy } from '../slice/booksSlice';

const FormSelect = () => {
  const dispatch = useDispatch();
  const sortedParam = useSelector((state) => {
    const { sortedBy } = state.booksReducer;
    return sortedBy;
  });

  const handleChange = (e) => {
    dispatch(setSortedBy(e.target.value));
  };

  return (
    <div className="d-flex justify-content-end align-items-center mt-4">
      <select value={sortedParam} onChange={handleChange}>
        <option value="byAuthor">По автору</option>
        <option value="byTitle">По названию</option>
      </select>
    </div>
  );
};

export default FormSelect;
