// modules/book/BookList.tsx
import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="flex">
          <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
