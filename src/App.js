import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: []
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
      .then(resp => resp.json())
      .then(json => this.setState({planeteers: json}))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
