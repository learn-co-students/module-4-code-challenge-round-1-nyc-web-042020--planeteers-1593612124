import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    filter: ''  
  }

  planeteerFilterOnChange = (evt) => {
    this.setState({ filter: evt.target.value })
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then(resp => resp.json())
      .then(arr => {
        this.setState({
          planeteers: arr
        })
      })
      // .then(arr => {console.log(arr);})
  }

  changeFilter = (searchTerm) =>{
    this.setState({
      filter: searchTerm
    })
  }


  returnsArray = () => {
    let arrayToReturn = this.state.planeteers.filter(planeteerPojo => {
      return (
        planeteerPojo.name.toLowerCase().includes(this.state.filter.toLowerCase())
        ||
        planeteerPojo.bio.toLowerCase().includes(this.state.filter.toLowerCase())
        )
    })
    return arrayToReturn
  }

  render(){
    // console.log(this.state.planeteers)
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
