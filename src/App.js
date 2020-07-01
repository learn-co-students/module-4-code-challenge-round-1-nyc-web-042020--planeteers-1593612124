import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers: [],
    filteredPlaneteers: [],
    sortInput: ''
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(response=>response.json())
    .then(pData => {
      this.setState({
        planeteers: pData
      })
    })
  }

  filterFunction = (event) => {
    console.log("change:", event.target.value)
    this.setState({
      sortInput: event.target.value
    });
  
     this.setState({
      filteredPlaneteers: this.state.planeteers.filter(planeteer =>{
        return planeteer.name.toLowerCase().includes(this.state.sortInput.toLowerCase())
      })
     })
  }

  render(){


    return (
      <div>
        <Header />
        <SearchBar filterFunction={this.filterFunction} sortInput={this.state.sortInput}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.filteredPlaneteers}/>
      </div>
    );
  }

}

export default App;
