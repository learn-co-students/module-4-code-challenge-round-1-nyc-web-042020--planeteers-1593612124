import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    this.props.changeSearch(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search..." value={this.props.search} onChange={this.handleChange}></input>
      </div>
    );
  }

}

export default SearchBar;
