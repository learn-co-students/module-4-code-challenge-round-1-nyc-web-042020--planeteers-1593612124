import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: "",
    sortedById: true
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(fetchedPlaneteers => {
      this.setState({
        planeteers: fetchedPlaneteers
      })
    })
  }

  renderPlaneteers = () => {
    let arrayOfPlaneteers = this.state.planeteers
    if (this.state.search){
      arrayOfPlaneteers = this.state.planeteers.filter(planeteer => 
        planeteer.name.includes(this.state.search) || planeteer.bio.includes(this.state.search)
      )
      if (this.state.sortedById) {
        arrayOfPlaneteers.sort((planetA, planetB) => {
          return planetA.id - planetB.id
        })
      } else {
        arrayOfPlaneteers.sort((planetA, planetB) => {
          return planetB.born - planetA.born
        })
      }
    }
    if (this.state.sortedById) {
      arrayOfPlaneteers.sort((planetA, planetB) => {
        return planetA.id - planetB.id
      })
    } else {
      arrayOfPlaneteers.sort((planetA, planetB) => {
        return planetB.born - planetA.born
      })
    }
    
    return arrayOfPlaneteers
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  addRandomPlaneteer = (planeteer) => {
    let newArray = this.state.planeteers
    newArray.push(planeteer)
    this.setState(newArray)
  }

  handleCheck = () => {
    this.setState({
      sortedById: !this.state.sortedById
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar 
        search={this.state.search} 
        handleChange={this.handleChange} 
        sortedById={this.state.sortedById} 
        handleCheck={this.handleCheck}/>
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer}/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
