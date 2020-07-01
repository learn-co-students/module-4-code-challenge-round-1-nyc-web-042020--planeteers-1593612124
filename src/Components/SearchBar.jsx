import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="checkbox" checked={this.props.sort ? true : false} onChange={this.props.handleSort}/>
        <input type="text" value={this.props.searchTerm} placeholder="search" onChange={this.props.handleSearch} />
      </div>
    );
  }

}

export default SearchBar;
