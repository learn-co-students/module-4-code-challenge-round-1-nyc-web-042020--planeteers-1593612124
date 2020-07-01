import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.searchTerm} placeholder="search" onChange={this.props.handleSearch} />
      </div>
    );
  }

}

export default SearchBar;
