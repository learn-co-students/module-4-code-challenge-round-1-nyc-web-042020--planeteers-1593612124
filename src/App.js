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

 

  componentDidMount(){
    fetch(`http://localhost:4000/planeteers`).then(r => r.json()).then(data => this.setState({planeteers: data}))
  }

  handleSearch = () => {

    let searchList = this.state.planeteers.filter((x) => { 
      return (x.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || x.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })
    if (searchList.length === 0) {
      return this.state.planeteers
    }
    if (searchList.length !== 0) {
      return searchList
    }
  }

  updateSearchTerm = (term) => {
    this.setState({searchTerm: term})
  }
  render(){
    return (
      <div>
        <Header />
        <SearchBar updateSearchTerm={this.updateSearchTerm} value={this.state.searchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.handleSearch()}/>
      </div>
    );
  }

}

export default App;
