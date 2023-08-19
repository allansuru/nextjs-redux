
import { createAction } from '@reduxjs/toolkit';
import { Book } from '../interfaces/book';

export const fetchBooks = createAction<Book>('books/fetchBooks');

export const addBook = createAction<Book>('books/addBook');

export const updateBook = createAction<Book>('books/updateBook');

export const deleteBook = createAction<number>('books/deleteBook');
