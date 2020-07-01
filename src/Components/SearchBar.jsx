import React from 'react';

class SearchBar extends React.Component {

  handleInput = (evt) => {
    this.props.updateSearchTerm(evt.target.value)
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            placeholder="Who would you like to search for?"
            value={this.props.searchTerm}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }

}

export default SearchBar;
