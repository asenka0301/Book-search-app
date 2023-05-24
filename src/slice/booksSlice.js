/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, { payload }) {
      state.books = payload;
    },
  },
});

export const { addBooks } = booksReducer.actions;
export default booksReducer.reducer;
