import React from 'react';

class SearchBar extends React.Component {

  handleData = (e) => {
    this.props.updateSearchTerm(e.target.value)    
  }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.props.value} onChange={this.handleData}></input>
      </div>
    );
  }

}

export default SearchBar;
