import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadProvider from './context/LoadProvider';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Pagination from './components/Pagination';
import useLoad from './hooks';

const App = () => {
  const load = useLoad();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(50);

  const allBooks = useSelector((state) => {
    const { books } = state.booksReducer;
    return books;
  });

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <LoadProvider>
      <div className="d-flex flex-column h-100">
        <Header />
        <MainContent lastBookIndex={lastBookIndex} firstBookIndex={firstBookIndex} />
        {
        !load.loading
        && (
          <Pagination
            booksPerPage={booksPerPage}
            allBooks={allBooks}
            paginate={paginate}
          />
        )
        }
      </div>
    </LoadProvider>
  );
};

export default App;
