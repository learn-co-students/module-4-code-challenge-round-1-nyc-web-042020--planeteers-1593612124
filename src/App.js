import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers: [],
    search: '',
    checked: false
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(arrayOfPlaneteers => {
      this.setState({
        planeteers: arrayOfPlaneteers
      })
    })
  }

  changeSearch = (search) => {
    this.setState({
      search: search
    })
  }
  
  changeChecked = () => {
    this.setState(prevState => {
      return{
        checked: !prevState.checked
      }
    })
  }

  planeteerToDisplay = () => {
    let newArray = this.state.planeteers
    if(this.state.search === ''){
      return newArray
    }
    else if(this.state.search !== ''){
      newArray = this.state.planeteers.filter((search) => {
        return search.name.toLowerCase().includes(this.state.search.toLowerCase()) || search.bio.toLowerCase().includes(this.state.search.toLowerCase())
      })
    }

    return newArray
  }

  // I was not able to combine the two sorts to finish the 3rd advanced deliverable.
  // I separated the two to show functionality but would love any insight on how to combine them please thank you!
  // checkBoxPlaneteers = () => {
  //   let newArray = this.state.planeteers
  //   if(this.state.checked === false){
  //     return newArray
  //   }
  //   else if(this.state.checked === true){
  //     newArray = [...this.state.planeteers].sort((personA, personB) => {
  //       return personB.born - personA.born
  //     })
  //   }

  //   return newArray
  // }

  addNewPlaneteer = (newPlaneteer) => {
    let newArray = [...this.state.planeteers, newPlaneteer]

    this.setState({
      planeteers: newArray
    })
  }

  render(){
    console.log(this.state.checked)
    return (
      <div>
        <Header />
        <SearchBar 
        search={this.state.search}
        changeSearch={this.changeSearch}
        checked={this.state.checked}
        changeChecked={this.changeChecked}
        />
        <RandomButton
        addNewPlaneteer={this.addNewPlaneteer}
        />
        <PlaneteersContainer 
        planeteers={this.planeteerToDisplay()}
        // planeteers={this.checkBoxPlaneteers()}
        />
      </div>
    );
  }

}

export default App;
