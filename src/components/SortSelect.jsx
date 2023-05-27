import React from 'react';

const SortSelect = ({ sortedBy, setSortedBy }) => {
  const handleChange = (e) => {
    setSortedBy(e.target.value);
  };

  return (
    <select value={sortedBy} onChange={handleChange}>
      <option value="byAuthor">По автору</option>
      <option value="byTitle">По названию</option>
    </select>
  );
};

export default SortSelect;
