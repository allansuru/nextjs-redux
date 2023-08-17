// modules/book/BookShow.tsx
import React, { useState } from "react";
import styles from "./BookShow.module.css";
import BookEdit from "./BookEdit";
import { useDispatch } from "react-redux";
import { deleteBookAsync } from "./shared/state/bookThunks";

const BookShow = ({ book }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleUpdateBook = ({ updated }) => {
    setEditing(updated);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteBookAsync(id));
  };

  return (
    <div className={`box ${styles.bookBox}`}>
      <div className="content">
        <h1 className="title is-4 text-indigo-600">{book.name}</h1>
        {editing ? (
          <BookEdit book={book} onUpdate={handleUpdateBook} />
        ) : (
          <>
            <div className={`book-image ${styles.bookImage}`}>
              <img
                src={book.imageUrl}
                alt={`Cover of ${book.name}`}
                className="book-cover w-128 h-128 object-cover"
              />
            </div>
            <div className={`buttons ${styles.buttons}`}>
              <button
                className={`button is-danger ${styles.icon} ${styles.deleteIcon}`}
                onClick={() => handleDelete(book.id)}
              >
                <span className="icon">
                  <i className="fas fa-trash"></i>
                </span>
              </button>
              <button
                className={`button is-primary ${styles.icon} ${styles.editIcon}`}
                onClick={handleEditClick}
              >
                <span className="icon">
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookShow;
