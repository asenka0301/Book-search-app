/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedBy: 'По автору',
  books: [],
};

const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, { payload }) {
      const filteredData = payload.map((bookData) => bookData.volumeInfo);
      state.books = filteredData;
    },
    setSortedBy(state, { payload }) {
      console.log(payload);
      state.sortedBy = payload;
    },
  },
});

export const { addBooks, setSortedBy } = booksReducer.actions;
export default booksReducer.reducer;
