import React from 'react';

class SearchBar extends React.Component {

  

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.search} onChange={this.props.handleChange} placeholder="Search by name..."/>
        <br></br>
        <input type="checkbox" name="sortById" onChange={this.props.handleCheck} checked={this.props.sortedById ? false : true}/> Sort by Age
      </div>
    );
  }

}

export default SearchBar;
