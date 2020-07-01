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
    fetch(`http://localhost:4000/planeteers`)
      .then(resp => resp.json())
      .then(json => this.setState({planeteers: json}))
  }

  renderPlaneteers = () => {
    return this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm) || planeteer.bio.toLowerCase().includes(this.state.searchTerm))
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
