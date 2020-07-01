import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: " "
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        planeteers: data
      })
    })
  }

  changeSearchTerm = (valueFromSearchBar) => {
    this.setState({
      searchTerm: valueFromSearchBar
    })
  }

  render(){
    console.log(this.state.searchTerm)
    return (
      <div>
        <Header />
        <SearchBar 
          changeSearchTerm={this.changeSearchTerm}
          searchTerm={this.state.searchTerm}/>
        <RandomButton/>
        <PlaneteersContainer 
          planeteers={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
