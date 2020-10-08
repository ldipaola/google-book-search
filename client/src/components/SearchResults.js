import React, { useContext } from "react";
import BooksContext from "../utils/booksContext";
import shortid from "shortid";
import api from "../utils/api";
import "./searchResults.css";

export default function SearchResults() {
  const { books } = useContext(BooksContext);
  let booksToRender = "";
  const handleClick = function (e) {
    e.preventDefault();
    const bookToSave = books.data.items.find(
      (element) => element.id === e.currentTarget.dataset.value
    );
    let bookData = "";
    console.log(bookToSave);
    if (bookToSave.volumeInfo.authors) {
      bookData = {
        title: bookToSave.volumeInfo.title,
        authors: [...bookToSave.volumeInfo.authors],
        description: bookToSave.volumeInfo.description,
        image: bookToSave.volumeInfo.imageLinks.thumbnail,
        link: bookToSave.volumeInfo.infoLink,
      };
    } else if (!bookToSave.volumeInfo.authors) {
      bookData = {
        title: bookToSave.volumeInfo.title,
        authors: [...bookToSave.volumeInfo.publisher],
        description: bookToSave.volumeInfo.description,
        image: bookToSave.volumeInfo.imageLinks.thumbnail,
        link: bookToSave.volumeInfo.infoLink,
      };
    }
    api.saveBook(bookData).then((book) => alert("Saved"));
  };

  if (books && books !== "No Results") {
    booksToRender = books.data.items.map((book) => (
      <div key={shortid.generate()} className="card search results">
        <div className="card-image">
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : book.volumeInfo.imageLinks.thumbnail
            }
            className="img-responsive"
            alt="book cover"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">{book.volumeInfo.title}</div>
          <div className="card-subtitle text-gray">
            {book.volumeInfo.subtitle}
          </div>
          <div className="card-subtitle text-gray">
            {book.volumeInfo.authors ? (
              book.volumeInfo.authors.map((author) => (
                <p key={shortid.generate()} style={{ marginBottom: "0px" }}>
                  {author}
                </p>
              ))
            ) : (
              <p key={shortid.generate()} style={{ marginBottom: "0px" }}>
                {book.volumeInfo.publisher}
              </p>
            )}
          </div>
        </div>
        <div className="card-body">{book.volumeInfo.description}</div>
        <div className="card-footer">
          <a
            className="btn btn-primary"
            href={book.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <button
            className="btn btn-primary"
            data-value={book.id}
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    ));
  } else if (books === "No Results") {
    booksToRender = <div>No Results</div>;
  } else {
    booksToRender = <div></div>;
  }

  return (
    <div className="container results" style={{ marginBottom: "8px" }}>
      {books ? booksToRender : <p></p>}
    </div>
  );
}
