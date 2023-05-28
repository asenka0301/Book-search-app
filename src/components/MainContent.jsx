import React from 'react';
import { Container } from 'react-bootstrap';
import PageControls from './PageControls';
import Books from './Books';
import useLoad from '../hooks';
import Loader from './Loader';
import Pagination from './Pagination';

const MainContent = (props) => {
  const load = useLoad();
  const {
    currentPage,
    setCurrentPage,
    booksPerPage,
    setBooksPerPage,
    sortedBy,
    setSortedBy,
  } = props;
  return (
    <Container className="h-100 d-flex flex-column position-relative">
      <PageControls
        setCurrentPage={setCurrentPage}
        booksPerPage={booksPerPage}
        setBooksPerPage={setBooksPerPage}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />
      { load.loading ? <Loader />
        : <Books currentPage={currentPage} booksPerPage={booksPerPage} sortedBy={sortedBy} /> }
      {!load.loading && load.isBooksFounded
      && (
        <Pagination
          currentPage={currentPage}
          booksPerPage={booksPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default MainContent;
