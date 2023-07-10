import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import PageControls from './PageControls';
import Books from './Books';
import useLoad from '../hooks';
import Loader from './Loader';
import Pagination from './Pagination';
import { addBooks } from '../slice/booksSlice';

const MainContent = (props) => {
  const load = useLoad();
  const dispatch = useDispatch();
  const {
    currentPage,
    setCurrentPage,
    booksPerPage,
    setBooksPerPage,
    sortedBy,
    setSortedBy,
  } = props;

  useEffect(() => {
    const fetchContent = async () => {
      load.setLoading(true);

      const response = await axios.get('https://openlibrary.org/search.json?q=javascript');
      const searchResult = response.data.docs;

      if (searchResult.length > 0) {
        load.setIsBooksFounded(true);
        dispatch(addBooks(searchResult));
        setCurrentPage(1);
      } else {
        load.setIsBooksFounded(false);
      }
      load.setLoading(false);
    };
    fetchContent();
  }, []);

  return (
    <Container className="mh-100 d-flex flex-column">
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
