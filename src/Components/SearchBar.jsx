import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input 
          type="text" 
          placeholder={"What would you like to search for?"}
          onChange={this.props.onChange} 
        /> 
        <i className="circular search link icon"></i>
      </div>
    );
  }

}

export default SearchBar;
