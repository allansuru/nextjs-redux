// modules/book/shared/state/bookActions.ts

import { createAction } from '@reduxjs/toolkit';
import { Book } from '../interfaces/book';


// Ação para adicionar um livro
export const fetchBooks = createAction<Book>('books/fetchBooks');

// Ação para adicionar um livro
export const addBook = createAction<Book>('books/addBook');

// Ação para atualizar um livro
export const updateBook = createAction<Book>('books/updateBook');

// Ação para deletar um livro
export const deleteBook = createAction<number>('books/deleteBook');
