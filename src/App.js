import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers : [],
    searchTerm: "",
    checked: false
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then((pObj) => {
      return this.setState({planeteers: pObj})
    })
  }

  changeTerm = (term) => {
    this.setState({searchTerm: term})
  }



  filteredSearches = () => {

    let copyOfArr = this.state.planeteers.filter((p)=>{
      
      return p.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||  p.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  return copyOfArr
  }
  

  addPlaneteer = (newPlaneteer) => {
    // console.log(newPlaneteer)
     let copy = [...this.state.planeteers, newPlaneteer]
     this.setState({planeteers: copy})
  }

  changeCheck = () => {
    this.setState((prevState) =>{
      
      return {checked: !prevState.checked}
    })
  }

  render(){
    console.log('i wish sorting worked but the value is', this.state.checked)
    return (
      <div>
        <Header />
        <SearchBar 
        searchTerm={this.state.searchTerm}
        changeTerm = {this.changeTerm}
        changeCheck = {this.changeCheck}
       />
        <RandomButton
        addPlaneteer = {this.addPlaneteer}
        />
        <PlaneteersContainer
        planeteers = {this.filteredSearches()} 
        />
      </div>
    );
  }

}

export default App;
