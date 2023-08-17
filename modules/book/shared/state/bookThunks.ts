import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, del, put, post } from '@core/services/api.service';
import { Book } from '../interfaces/book';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
    const response = await get('books');
    return response;
});

export const deleteBookAsync = createAsyncThunk<void, number>('book/deleteBook', async (id) => {
    await del(`books/${id}`);
    return id;
});

export const createBookAsync = createAsyncThunk<Book, Book>('book/createBook', async (book) => {
    const response = await post('books', book);
    return response;
});

export const updateBookAsync = createAsyncThunk<Book, Book>('book/updateBook', async (book) => {
    const response = await put(`books/${book.id}`, book);
    return response;
});
