import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  selectedBook: {},
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksSuccess: (state, action) => {
      state.list = action.payload
    },
    fetchBookDetailsSuccess: (state, action) => {
      state.selectedBook = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchBooksSuccess, fetchBookDetailsSuccess } = booksSlice.actions

export default booksSlice.reducer
