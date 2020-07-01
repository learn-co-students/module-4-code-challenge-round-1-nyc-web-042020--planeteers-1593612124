import React from 'react';

class SearchBar extends React.Component {


  state = {
    searchTerm: ""
  }


  handleData = (e) => {
    this.setState({searchTerm: e.target.value})
    this.props.updateSearchTerm(e.target.value)
    //console.log(this.state.searchTerm)
    
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="search">
        <input type="text" value={this.props.value} onChange={this.handleData}></input>
      </div>
    );
  }

}

export default SearchBar;
