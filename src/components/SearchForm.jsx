import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const key = process.env.ACCESS_TOKEN;
  console.log(key);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=${key}`);
      console.log(response.data.items);
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
