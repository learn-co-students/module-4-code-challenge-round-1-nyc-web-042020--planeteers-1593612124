import React from "react";

class SearchBar extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div
        className="search"
        value={this.props.searchTerm}
        onChange={this.handleChange}
      ></div>
    );
  }
}

export default SearchBar;
