import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../modules/book/shared/state/bookThunks";
import BookCreate from "../modules/book/BookCreate";
import BookList from "../modules/book/BookList";

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="container w-full">
      <BookCreate />
      <BookList books={books} />
    </div>
  );
};

export default BookPage;
