import React from 'react';

// class SearchBar extends React.Component {
function SearchBar (props){
  let handleChange = (evt) => {
    props.changeFilter(evt.target.value)
  }

  // render() {
    return (
      <div className="search">
        <input type="text" value={props.filter} onchange={handleChange}/>
      </div>
    );
  // }

}

export default SearchBar;
