import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteerList: [],
    searchTerm : ""
  }

  componentDidMount() { 
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(planeteerObjs => {
      this.setState({
        planeteerList: planeteerObjs
      })
    })
  }

  arrayToReturn = () => {
    let returnArr = this.state.planeteerList.filter((planeteer) => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm) 
      || 
      planeteer.bio.toLowerCase().includes(this.state.searchTerm)
    })

    return returnArr
  }

  setSearchState = (input) => {
    this.setState({
      searchTerm: input
    })
  }

  addPlaneteer = (planeteerObj) => {
    console.log(planeteerObj)
    fetch("http://localhost:4000/planeteers", {
      method: "POST", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(planeteerObj)
    })
    .then(resp => resp.json())
    .then(this.setState((prevState) => {
      return {
        planeteerList: [...prevState.planeteerList, planeteerObj]
      }

    }))
  }



  render(){
    let displayArr = this.arrayToReturn()
    return (
      <div>
        <Header />
        <SearchBar 
        setStateFunction = {this.setSearchState}
        searchState = {this.state.searchTerm}
        />
        <RandomButton
        addFunction = {this.addPlaneteer}
        />
        <PlaneteersContainer 
        planeteerList = {displayArr}
        />
      </div>
    );
  }

}

export default App;
