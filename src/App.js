import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
    .then(resp => resp.json())
    .then(planeteersData => this.setState({ planeteers: planeteersData }))
  }

  changeSearchTerm = (termFromChild) => {this.setState({ searchTerm: termFromChild })}

  filteredPlaneteersArr = () => {
    let filteredArrToReturn = this.state.planeteers.filter(planeteer => {
      return (
        planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
        planeteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    })
    return filteredArrToReturn
  }

  render(){
    const { searchTerm } = this.state

    return (
      <div>
        <Header/>
        <SearchBar searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filteredPlaneteersArr()}/>
      </div>
    );
  }

}

export default App;
