import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../interfaces/book';
import {
    createBookAsync,
    deleteBookAsync,
    fetchBooks,
    updateBookAsync,
} from './bookThunks';

const initialState =
{
    books: [],
    loading: false,
    error: null
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        // ... outras ações ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createBookAsync.fulfilled, (state, action) => {
                state.books.push(action.payload);
            })
            .addCase(updateBookAsync.fulfilled, (state, action) => {
                state.books = state.books.map((book) =>
                    book.id === action.payload.id ? action.payload : book
                );
            })
            .addCase(deleteBookAsync.fulfilled, (state, action) => {
                state.books = state.books.filter((book) => book.id !== action.payload);
            })
    },
});

export default bookSlice.reducer;
