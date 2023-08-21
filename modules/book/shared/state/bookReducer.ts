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
    books: Array<Book>,
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
                state.push(action.payload);
            })
            .addCase(updateBookAsync.fulfilled, (state, action) => {
                const updatedIndex = state.findIndex((book) => book.id === action.payload.id);
                if (updatedIndex !== -1) {
                    state[updatedIndex] = action.payload;
                }
            })
            .addCase(deleteBookAsync.fulfilled, (state, action) => {
                return state.filter((book) => book.id !== action.payload);
            });
    },
});

export default bookSlice.reducer;
