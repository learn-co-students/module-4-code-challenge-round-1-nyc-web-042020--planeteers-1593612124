import React from 'react';

function SearchBar(props) {

  return (
    <div className="search">
      <input type="checkbox" checked={props.sort ? true : false} onChange={props.handleSort}/>
      <input type="text" value={props.searchTerm} placeholder="search" onChange={props.handleSearch} />
    </div>
  )

}

export default SearchBar;
