import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookAsync } from "./shared/state/bookThunks";

const BookEdit = ({ book, onUpdate }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(book.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookAsync({ ...book, name: newName }));
    onUpdate({ updated: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons mt-2 mb-2">
        <div className="control">
          <input
            type="text"
            className="input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="control">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookEdit;
