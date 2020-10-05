import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container">
        <header className="navbar">
          <section className="navbar-section">
            <Link to="/" className="navbar-brand mr-2">
              Google Book Search
            </Link>
            <Link to="/" className="btn btn-link">
              Search
            </Link>
            <Link to="/saved" className="btn btn-link">
              Saved
            </Link>
          </section>
        </header>
    </div>
  );
}
