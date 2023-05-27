import React from 'react';
import BooksPerPageSelect from './BooksPerPageSelect';
import SortSelect from './SortSelect';

const PageControls = (props) => {
  const {
    setCurrentPage,
    booksPerPage,
    setBooksPerPage,
    sortedBy,
    setSortedBy,
  } = props;
  return (
    <div className="d-flex justify-content-end align-items-center mt-4">
      <BooksPerPageSelect
        booksPerPage={booksPerPage}
        setBooksPerPage={setBooksPerPage}
        setCurrentPage={setCurrentPage}
      />
      <SortSelect sortedBy={sortedBy} setSortedBy={setSortedBy} />
    </div>
  );
};

export default PageControls;
