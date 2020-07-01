import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
const baseUrl = "http://localhost:4000/planeteers"
class App extends React.Component {
  state = {
    planeteers: [],
    searchTerm: ''
  } 

  componentDidMount() {
    this.getPlaneteers() 
  } 

  getPlaneteers = () => {
    fetch(baseUrl) 
      .then(res => res.json()) 
      .then(planeteer => this.setState({
        planeteers: planeteer 
      }))
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value}) 
  } 

  render(){
    const desiredPlaneteer = this.state.planeteers.filter(p => p.name.includes(this.state.searchTerm) || p.bio.includes(this.state.searchTerm)) 
    return (
      <div>
        <Header />
        <SearchBar onChange={this.handleSearchChange}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={desiredPlaneteer} />
      </div>
    );
  }

}

export default App;
