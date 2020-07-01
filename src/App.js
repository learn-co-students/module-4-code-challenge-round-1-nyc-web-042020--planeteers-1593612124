import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: "",
    sort: false
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
      .then(resp => resp.json())
      .then(json => this.setState({planeteers: json}))
  }

  renderPlaneteers = () => {
    if (this.state.sort) { 
      return this.state.planeteers.sort((a, b) => b.born - a.born).filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm) || planeteer.bio.toLowerCase().includes(this.state.searchTerm))
    }
    
    else {
      return this.state.planeteers.sort((a, b) => a.id - b.id).filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm) || planeteer.bio.toLowerCase().includes(this.state.searchTerm))
    }
  }

  addNewPlaneteer = (newPlaneteer) => {

    if (newPlaneteer) {
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPlaneteer)
    }

    fetch(`http://localhost:4000/planeteers`, configObj)
      .then(resp => resp.json())
      .then(json => this.setState((prevState) => { return { planeteers: [...prevState.planeteers, json] } }))
    }
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSort = () => {
    this.setState((prevState) => {return {sort: !prevState.sort}})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} sort={this.state.sort} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
        <RandomButton addNewPlaneteer={this.addNewPlaneteer}/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
