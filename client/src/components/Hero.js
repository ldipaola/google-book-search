import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero bg-gray">
        <div className="hero-body" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <h1>Google Books Search</h1>
          <p>Search for and save books of interest</p>
        </div>
      </div>
    </div>
  );
}
