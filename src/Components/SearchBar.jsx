import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input onChange={e=>this.props.handleChange(e)} className='searchTerm' type='text' name='search' value={this.props.search}></input>
      </div>
    );
  }

}

export default SearchBar;
