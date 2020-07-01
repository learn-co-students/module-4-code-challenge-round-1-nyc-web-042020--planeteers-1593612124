import React from 'react';

class SearchBar extends React.Component {

handleChange = (e) => {
this.props.changeTerm(e.target.value)
}

  render() {

    return (
      <div className="search">
        Search Bar: <br></br>
        <input type="text" placeholder="Who Would you Like to Search For?" value={this.props.searchTerm} onChange={this.handleChange}></input>
      </div>
    );
  }

}

export default SearchBar;
