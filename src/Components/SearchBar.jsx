import React from 'react';

class SearchBar extends React.Component {

  handleChange=(e) => {
    this.props.setStateFunction(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <input type="text" value={this.props.searchState} onChange={this.handleChange} name="search-term"/>
        {/* <input type="checkbox" name ="age-order" checked={this.state.checked} onChange={this.handleInputChange}/> */}
      </div>
    );
  }

}

export default SearchBar;
