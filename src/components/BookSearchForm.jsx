import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { addBooks } from '../slice/booksSlice';
import useLoad from '../hooks';

const SearchForm = () => {
  const load = useLoad();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      load.setLoading(true);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${inputValue}`);
      dispatch(addBooks(response.data.docs));
      load.setLoading(false);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Aвтор или название книги"
        className="me-2"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="success" type="submit">Поиск</Button>
    </Form>
  );
};

export default SearchForm;
