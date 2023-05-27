import React from 'react';
import { Container } from 'react-bootstrap';
import FormSelect from './FormSelect';
import Books from './Books';
import useLoad from '../hooks';
import Loader from './Loader';

const MainContent = ({ firstBookIndex, lastBookIndex }) => {
  const load = useLoad();

  return (
    <Container className="h-100 d-flex flex-column">
      <FormSelect />
      {load.loading ? <Loader />
        : <Books firstBookIndex={firstBookIndex} lastBookIndex={lastBookIndex} />}
    </Container>
  );
};

export default MainContent;
