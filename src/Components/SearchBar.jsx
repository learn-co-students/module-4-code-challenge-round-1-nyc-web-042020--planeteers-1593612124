import React from 'react';

class SearchBar extends React.Component {

  handleInput = (evt) => {
    this.props.updateSearchTerm(evt.target.value)
  }

  handleInputSort = (evt) => {
    this.props.updateCheckedState(evt.target.value)
  }

  render() {
    return (
      <div className="search">
        <form>
          <label>
            Search
            <input
              placeholder="Who would you like to search for?"
              value={this.props.searchTerm}
              onChange={this.handleInput}
            />
          </label>
          <br />
          <label>
          Sort By Age:
          <input 
            name="sort"
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleInputSort}
          />
          </label>
        </form>
      </div>
    );
  }

}

export default SearchBar;
