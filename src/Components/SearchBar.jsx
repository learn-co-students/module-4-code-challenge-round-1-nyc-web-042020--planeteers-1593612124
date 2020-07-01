import React from 'react';

const SearchBar = (props) => {

    return (
      <div className="search">
        <label htmlFor="search">Search For Planeteer By Name or Bio:</label>
        <input type="text" value={props.sortInput} onChange={props.filterFunction}></input>
      </div>
    );
  }



export default SearchBar;
