import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBooks,
  deleteBookAsync,
  createBookAsync,
  updateBookAsync,
} from "../modules/book/shared/state/bookThunks";
import BookCreate from "../modules/book/BookCreate";
import BookList from "../modules/book/BookList";

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteBookAsync(id));
  };

  const handleCreate = async (newBook) => {
    await dispatch(createBookAsync(newBook));
  };

  const handleEdit = async (updatedBook) => {
    await dispatch(updateBookAsync(updatedBook));
  };

  return (
    <div className="container w-full">
      <BookCreate onBookCreate={handleCreate} />
      <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default BookPage;
