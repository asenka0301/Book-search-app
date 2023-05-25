import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Books from './components/Books';
import FormSelect from './components/FormSelect';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Header />
    <Container>
      <FormSelect />
      <Books />
    </Container>
  </div>

);

export default App;
