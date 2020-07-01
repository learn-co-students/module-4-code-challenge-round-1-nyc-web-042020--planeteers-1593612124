import React from 'react';

class SearchBar extends React.Component {


  handleType = (event) => {
    this.props.changeSearch(event.target.value)
  }

  render() {
    console.log(this.props)
    return (
      <div className="search">
        <input
          type="text"
          value={this.props.search}
          onChange={this.handleType}
        />

      </div>
    );
  }

}

export default SearchBar;
