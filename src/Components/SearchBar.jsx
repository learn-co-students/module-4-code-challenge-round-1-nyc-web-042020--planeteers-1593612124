import React from 'react';

class SearchBar extends React.Component {
 
  handleChange = (event) => {
    this.props.changeSearchTerm(event.target.value)
  }

  render() {
    return (
      <div className="search">
        <input value={this.props.searchTerm} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default SearchBar;
