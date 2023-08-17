import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { BookCreateProps } from "./shared/interfaces/book";
import { createBookAsync } from "./shared/state/bookThunks";
import { useRouter } from "next/router"; // Import useRouter from next/router

const BookCreate: React.FC<BookCreateProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Use useRouter from next/router
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [nameError, setNameError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setImageUrlError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || name.length < 3) {
      setNameError("Name must be at least 3 characters");
      return;
    }

    if (!imageUrl) {
      setImageUrlError("Image URL is required");
      return;
    }

    const newBook = { name, imageUrl, id: Math.floor(Math.random() * 1000000) };

    try {
      await dispatch(createBookAsync(newBook));
      router.push("/book");
    } catch (error) {
      console.error("Error creating book:", error);
    }

    setName("");
    setImageUrl("");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className={`mb-2 px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                nameError ? "ring-red-500" : ""
              }`}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="text-red-500 text-xs mt-1">{nameError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              className={`mb-2 px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                imageUrlError ? "is-danger" : ""
              }`}
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
            {imageUrlError && (
              <p className="text-red-500 text-xs mt-1">{imageUrlError}</p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                !name || !imageUrl
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
              }`}
              disabled={!name || !imageUrl}
            >
              Create Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;
