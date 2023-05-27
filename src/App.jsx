import React, { useState } from 'react';
import LoadProvider from './context/LoadProvider';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Pagination from './components/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState('byAuthor');

  return (
    <LoadProvider>
      <div className="d-flex flex-column h-100">
        <Header />
        <MainContent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          booksPerPage={booksPerPage}
          setBooksPerPage={setBooksPerPage}
          sortedBy={sortedBy}
          setSortedBy={setSortedBy}
        />
        <Pagination booksPerPage={booksPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </LoadProvider>
  );
};

export default App;
