import React from "react";

class SearchBar extends React.Component {
  handleInput = (e) => {
    this.props.searchPlaneteer(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          value={this.props.searchTerm}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default SearchBar;
