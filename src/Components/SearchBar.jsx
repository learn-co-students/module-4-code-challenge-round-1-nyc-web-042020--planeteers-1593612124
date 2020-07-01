import React from 'react';

class SearchBar extends React.Component {
  
  handleChange = (e) => {
    this.props.changeSearchTerm(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <input 
          className="searchTerm" 
          type="text" 
          value={this.props.searchTerm}
          onChange={this.handleChange}/>
      </div>
    );
  }

}

export default SearchBar;
