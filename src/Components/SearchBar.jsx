import React from 'react';

class SearchBar extends React.Component {


  state = {
    inputValue: ""
  }

handleType = e => {
  this.setState({

    inputValue: e.target.value
  })
}


  render() {


    const filterPlanteers =
    this.state.planeteers.filter(planeteer => {
      return planeteer.name.toLowerCase().include(this.state.inputValue.toLowerCase())
    })

    return (
      <div className="search">
      <label>Search Planeteers</label>
      <input 
      type="text" 
      value={this.state.inputValue}
      onChange={this.handleType}
      />
      </div>
    );
  }

}

export default SearchBar;
