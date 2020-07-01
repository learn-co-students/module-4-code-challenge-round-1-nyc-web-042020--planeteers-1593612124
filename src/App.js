import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: ""
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
    }
    return arrayOfPlaneteers
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar search={this.state.search} handleChange={this.handleChange}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
