import React from "react";

const SearchBar = (props) => {
    return (
      <div className="search-bar-wrapper">
        
        <form className="search-form">
          <input
            type="text"
            placeholder="Search"
          />
        </form>
    
      </div>
    );
  };

  export default SearchBar;