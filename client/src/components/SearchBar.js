import React, {useState, useContext} from "react";
import axios from "axios";
import BooksContext from "../utils/booksContext";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setBooks } = useContext(BooksContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookSearch = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"intitle");
    if (bookSearch.data.totalItems > 0) setBooks(bookSearch);

    else {setBooks("No Results")}
  }

  const handleKeyPress = async (e) => {
    if(e.key === "Enter"){
      
    const bookSearch = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"+intitle&printType=books");
    if (bookSearch.data.totalItems > 0) setBooks(bookSearch);
    else {setBooks("No Results")}
  }
  }

  return (
    <div className="container" style={{marginTop:"8px"}}>
      <div className="card">
      <div className="card-header">
        <div className="card-title h5">Book Search</div>
        <div className="card-subtitle text-gray">Book</div>
      </div>
      <div className="card-body">
      <div className="input-group ">
          <input className="form-input" type="text" placeholder="search" onKeyPress={handleKeyPress} onChange={(e) => setSearch(e.target.value.trim())} />
          <button className="btn btn-primary input-group-btn" onClick={handleSubmit}>Search</button>
        </div>
      </div>
      </div>
    </div>
  );
}
