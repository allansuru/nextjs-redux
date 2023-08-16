import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../interfaces/book';
import {
    createBookAsync,
    deleteBookAsync,
    fetchBooks,
    updateBookAsync,
} from './bookThunks';

const initialState: Book[] = [];

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // ... outras ações ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (state, action) => {
                return action.payload; // Update the state with fetched books
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
