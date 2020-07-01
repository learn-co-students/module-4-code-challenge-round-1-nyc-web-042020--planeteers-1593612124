import React from 'react';

class SearchBar extends React.Component {

  

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.search} onChange={this.props.handleChange} placeholder="Search by name..."/>
      </div>
    );
  }

}

export default SearchBar;
