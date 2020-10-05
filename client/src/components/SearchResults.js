import React, { useContext } from "react";
import BooksContext from "../utils/booksContext";
import "./searchResults.css";

export default function SearchResults() {
  const { books, setBooks } = useContext(BooksContext);
  let booksToRender = "";
  if (books) {
    booksToRender = books.data.items.map((book) => (
      <div className="card search results">
        <div className="card-image">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            className="img-responsive" alt="book cover"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">{book.volumeInfo.title}</div>
          <div className="card-subtitle text-gray">
            {book.volumeInfo.subtitle}
          </div>
          <div className="card-subtitle text-gray">
            {book.volumeInfo.authors.map((author) => (
              <p>{author}</p>
            ))}
          </div>
        </div>
        <div className="card-body">{book.volumeInfo.description}</div>
        <div className="card-footer">
          <a
            className="btn btn-primary"
            href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"
          >
            View
          </a>
          <a href="#" className="btn btn-primary">Save</a>
        </div>
      </div>
    ));
  }

  return <div className="container results">{books ? booksToRender : <p></p>}</div>;
}
