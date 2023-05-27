/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedBy: 'byAuthor',
  books: [],
};

const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, { payload }) {
      state.books = payload;
    },
    setSortedBy(state, { payload }) {
      state.sortedBy = payload;
    },
  },
});

export const { addBooks, setSortedBy } = booksReducer.actions;
export default booksReducer.reducer;
