import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        planeteers: data
      })
    })
  }

  changeSearchTerm = (valueFromSearchBar) => {
    this.setState({
      searchTerm: valueFromSearchBar
    })
  }

  searchTermArray = () => {
    let filteredArray = this.state.planeteers
    
    filteredArray = this.state.planeteers.filter((planeteer) => {
      return (
        planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ||
        planeteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    })
      return filteredArray
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          changeSearchTerm={this.changeSearchTerm}
          searchTerm={this.state.searchTerm}/>
        <RandomButton/>
        <PlaneteersContainer 
          planeteers={this.searchTermArray()}/>
      </div>
    );
  }

}

export default App;
