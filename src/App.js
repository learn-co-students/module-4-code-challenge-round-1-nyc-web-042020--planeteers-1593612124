import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers: [],
    search: ''
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        planeteers: data
      })
    })
  }

  handleInput = (input) => {
    this.setState({
      search: input
    })
  }

  handleSearch = (e) => {
    let searches = this.state.planeteers.filter(planet => {
      if ( planet.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        planet.bio.toLowerCase().includes(this.state.search.toLowerCase()) )
    return planet
    })

  return searches
  }

  render(){
    // console.log(this.state.planeteers)
    let {planeteers} = this.state
    return (
      <div>
        <Header />
        <SearchBar
          search={this.state.search}
          handleInput={this.handleInput}
        />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.handleSearch()}/>
      </div>
    );
  }

}

export default App;
