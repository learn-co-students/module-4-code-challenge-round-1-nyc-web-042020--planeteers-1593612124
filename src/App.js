import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers:[],
    search:'',
  }
  componentDidMount(){
    fetch('http://localhost:4000/planeteers').then(r=>r.json()).then(data=>this.setState({planeteers:data}))
  }
  filter=()=>this.state.planeteers.filter(planeteer=>{
      if(planeteer.name.toLowerCase().includes(this.state.search.toLowerCase())
      ||planeteer.bio.toLowerCase().includes(this.state.search.toLowerCase())){
        return true;
      }
    })
  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  
  }
  render(){
    return (
      <div>
        <Header />
        <SearchBar search={this.state.search} handleChange={this.handleChange}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filter()}/>
      </div>
    );
  }

}

export default App;
