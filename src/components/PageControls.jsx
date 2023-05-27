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
    <div className="controls">
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
