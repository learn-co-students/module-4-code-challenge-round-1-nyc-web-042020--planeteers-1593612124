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

  render(){
    // console.log(this.state.planeteers)
    let {planeteers} = this.state
    return (
      <div>
        <Header />
        <SearchBar search={this.state.search} handleInput={this.handleInput}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={planeteers}/>
      </div>
    );
  }

}

export default App;
