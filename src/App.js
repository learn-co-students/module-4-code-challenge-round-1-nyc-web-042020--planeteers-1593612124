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
    sort: true,
  }
  componentDidMount(){
    fetch('http://localhost:4000/planeteers').then(r=>r.json()).then(data=>this.setState({planeteers:data}))
  }
  getAge(){
    const date = new Date()
    const year =(date.getFullYear());
    return year-this.born
  }
  filter=(planeteers)=>{
    const plans = this.sort(planeteers)
    return plans.filter(planeteer=>{
      if(planeteer.name.toLowerCase().includes(this.state.search.toLowerCase())
      ||planeteer.bio.toLowerCase().includes(this.state.search.toLowerCase())){
        return true;
      }
    })
  }
  sort=(planeteers)=>{
    if(this.state.sort){
      return planeteers = planeteers.sort((a,b)=>{
        return this.getAge(a)-this.getAge(b)
      })
    }else{
      return planeteers
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleCheck=(e)=>{
    const val = this.state.sort
    this.setState({
      sort:!val
    },()=>{
      this.filter(this.state.planeteers)
      this.forceUpdate()
  })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar sort={this.state.sort}search={this.state.search} handleCheck={this.handleCheck} handleChange={this.handleChange}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filter(this.state.planeteers)}/>
      </div>
    );
  }

}

export default App;
