import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { addBooks } from '../slice/booksSlice';
import useLoad from '../hooks';

const SearchForm = ({ setCurrentPage }) => {
  const load = useLoad();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      load.setLoading(true);

      const response = await axios.get(`https://openlibrary.org/search.json?q=${inputValue}`);
      const searchResult = response.data.docs;

      if (searchResult.length > 0) {
        load.setIsBooksFounded(true);
        dispatch(addBooks(searchResult));
        setCurrentPage(1);
      } else {
        load.setIsBooksFounded(false);
      }

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
        className="fs-16 me-3 w-100"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={load.loading}
      />
      <Button className="submit-button" variant="success" type="submit">Поиск</Button>
    </Form>
  );
};

export default SearchForm;
