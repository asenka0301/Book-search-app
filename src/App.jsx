import React from 'react';
import LoadProvider from './context/LoadProvider';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => (
  <LoadProvider>
    <div className="d-flex flex-column h-100">
      <Header />
      <MainContent />
    </div>
  </LoadProvider>
);

export default App;
