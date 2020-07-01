import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    console.log(e.target.value)
    this.props.handleInput(e.target.value)
  }

  render() {
    return (
      <div className="search" >
        <input value={this.props.search} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default SearchBar;
