import React, { useState } from 'react';
import LoadProvider from './context/LoadProvider';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState('byAuthor');

  return (
    <LoadProvider>
      <div className="mh-100 d-flex flex-column">
        <Header
          setCurrentPage={setCurrentPage}
        />
        <MainContent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          booksPerPage={booksPerPage}
          setBooksPerPage={setBooksPerPage}
          sortedBy={sortedBy}
          setSortedBy={setSortedBy}
        />
      </div>
    </LoadProvider>
  );
};

export default App;
