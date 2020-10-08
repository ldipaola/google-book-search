import React, { useState, useEffect } from "react";
import api from "../utils/api";
import BookCard from "../components/BookCard";

export default function SavedSearch() {
  const [savedBooks, setSavedBooks] = useState();
  const [deletedBook, setDeletedBook] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.dataset.value);
    api.deleteBook(e.currentTarget.dataset.value).then((data) => {
      setDeletedBook(data.data);
    });
  };

  useEffect(() => {
    api
      .getBooks()
      .then((data) => {
        setSavedBooks(
          data.data.map((book) => (
            <BookCard
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={handleClick}
            />
          ))
        );
      })
      .catch((err) => console.log(err));
  }, [deletedBook]);

  return <div>{savedBooks}</div>;
}
