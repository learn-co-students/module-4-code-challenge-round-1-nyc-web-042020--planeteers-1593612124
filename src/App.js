import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: []
  }

   componentDidMount(){
      fetch("http://localhost:4000/planeteers")
        .then(resp => resp.json())
        .then(planeteersArray => {
         // console.log(planeteersArray)
    
          this.setState({
            planeteers: planeteersArray
          })
        })
    }


  render(){
    const {planeteers, searchTerm} = this.state
    return (
      <div>
        <Header />
        <SearchBar searchTerm={searchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={planeteers}/>
      </div>
    );
  }

}

export default App;
