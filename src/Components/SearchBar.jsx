import React from 'react';

class SearchBar extends React.Component {
  
  

handleChange = (e) => {
this.props.changeTerm(e.target.value)
}

handleCheck = (e) => {
this.props.changeCheck()

}

  render() {
    return (
      <div className="search">
        Search Bar: <br></br>
        <input className="searchTerm" type="text" placeholder="Who Would you Like to Search For?" value={this.props.searchTerm} onChange={this.handleChange}></input>
        <input type="checkbox" name="checkMe" onChange = {this.handleCheck} value={this.props.checked}/>
        <label htmlFor="checkMe">Sort Me!</label><br/>
      </div>
    );
  }

}

export default SearchBar;
