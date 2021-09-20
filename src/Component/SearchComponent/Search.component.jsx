import React from "react";
import "./search.styles.css";

function Search() {
  const handleChange = (e) => {
    //document.querySelector("close").styles.display = "block";
  };
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search Products..."
        onChange={handleChange}
      />
      <div className="close" style={{ display: "none" }}>
        X
      </div>
    </div>
  );
}

export default Search;
