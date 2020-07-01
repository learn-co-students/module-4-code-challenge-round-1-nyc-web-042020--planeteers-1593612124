import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state={
    planeteersList: [],
    searchTerm: "",
    // checked: false
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then((planeteers) => {
      this.setState({
        planeteersList: planeteers
      })
    })
  }

  updateSearchTerm = (termfromChild) => {
    this.setState({
      searchTerm: termfromChild
    })
  }

  // updateCheckedState = (checkFromChild) => {
  //   this.setState((prevState) => {
  //     return {
  //       checked: !prevState.checked
  //     }
  //   })
  // }

  addNewPlaneteer = (newPlaneteerInstance) => {
    let arrayToDisplay = [...this.state.planeteersList, newPlaneteerInstance]

    this.setState({
      planeteersList: arrayToDisplay
    })
  }

  arrayToRender = () => {
    let arrayToDisplay = this.state.planeteersList
    if (this.state.searchTerm.length > 1){
      arrayToDisplay = this.state.planeteersList.filter((planeteerPOJO) => {
        return (
          planeteerPOJO.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ||
          planeteerPOJO.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      })
    } 
    // if (this.state.checked === true){
    //   arrayToDisplay = this.state.planeteersList.sort((planeteerA, planeteerB) => {
    //     return planeteerA.age - planeteerB.age
    //   })
    // }

    return arrayToDisplay
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          checked={this.state.checked}
          updateCheckedState={this.updateCheckedState}
        />
        <RandomButton
          addNewPlaneteer={this.addNewPlaneteer}
        />
        <PlaneteersContainer 
          planeteers={this.arrayToRender()}
        />
      </div>
    );
  }

}

export default App;
