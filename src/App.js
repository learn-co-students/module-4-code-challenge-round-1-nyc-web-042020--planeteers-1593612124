import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers: [],
    search: ''
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

  render(){
    console.log(this.state.search)
    return (
      <div>
        <Header />
        <SearchBar 
        search={this.state.search}
        changeSearch={this.changeSearch}
        />
        <RandomButton/>
        <PlaneteersContainer 
        planeteers={this.planeteerToDisplay()}
        />
      </div>
    );
  }

}

export default App;
