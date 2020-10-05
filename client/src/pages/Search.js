import React, {useState, useMemo} from "react";
import SearchBar from "../components/SearchBar";
import BooksContext from "../utils/booksContext";
import SearchResults from "../components/SearchResults";

export default function Search() {
  const [books, setBooks] = useState(null);

  const value = useMemo(() => ({ books, setBooks }), [books, setBooks]);

  return (
    <div>
      <BooksContext.Provider value={value}>
      <SearchBar />
      <SearchResults />
      </BooksContext.Provider>
    </div>
  );
}
