import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../modules/book/shared/state/bookThunks";
import BookList from "../../modules/book/BookList";
import Link from "next/link";
import Loading from "../../core/components/Loading";
import withAuth from "../../core/components/WithAuth";

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchBooks());
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container w-full">
      <Link
        href="/book/create"
        className="mb-4 px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
      >
        Create Book
      </Link>
      {isLoading ? <Loading /> : <BookList books={books} />}
    </div>
  );
};

export default withAuth(BookPage);
