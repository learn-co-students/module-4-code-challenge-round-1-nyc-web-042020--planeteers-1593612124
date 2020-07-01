import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

state = {
  planeteerList: [],
  searchTerm: ""
}


componentDidMount(){
  fetch("http://localhost:4000/planeteers")
  .then (r => r.json())
  .then((arrayOfPlaneteers) => {
    this.setState({
      planeteerList: arrayOfPlaneteers
    })
  })
}

returnArray = () => {
  let array = this.state.planeteerList 

  if(this.state.searchTerm !== ""){
    array = this.state.planeteerList.filter((planeteer) => {
      return (
        planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ||
        planeteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    })
  }

  return array
}

changeSearch = (search) => {
  console.log(search)
  this.setState({
    searchTerm: search
  })
}

  render(){
    const {searchTerm} = this.state
    // console.log(searchTerm)
    // console.log(this.changeSearch)
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm={searchTerm}
          changeSearch={this.changeSearch}
        />
        <RandomButton/>
        <PlaneteersContainer 
          planeteers = {this.returnArray()}
        
        />
      </div>
    );
  }

}

export default App;

// As a user, I should be able to:

// √ - See list of planeteers on the page, using the `Planeteer` component. The `Planeteer` component should display the planeteer's 
// image, name, bio, Twitter handle, and conditionally render where they are based. If they are from the USA, the component should say 
// "USA-based", otherwise it should say "Working overseas".

// √NEED FETCH GET
//  √   - IMAGE
//  √   - NAME
//  √   - BIO
// √    - TWITTER HANDLE
//  √   - CONDITIONAL LOCATION
//  √       - NEED TERNARY LOGIC BASED ON BOOLEAN FROMUSA HANDLE IN COMPONENT


//√ - Click on the image of the planeteer in the `Planeteer` component and see the quote for that planeteer in place of the bio. 
// If I click on the image again, the quote should again be replaced with the bio. If I click on another planeteer's image, it 
// toggles that planeteer's bio independent of any other planeteer's.

// √NEED ONCLICK WITHIN COMPONENT FOR IMAGE CLICK
// √    - NEED CLICKED STATE BOOLEAN
//  √       - NEED TERNARY LOGIC BASED ON BOOLEAN STATE TO SWAP BETWEEN BIO AND QUOTE


// - Type in the `SearchBar` component and see the list of planeteers whose name or bio match the text in the search bar. 
// If there's no text in the search bar, all the planeteers should be rendered.

// NEED TO FILTER PLANETEER ARRAY
// √    - NEED IF/THEN LOGIC IN PARENT LEVEL TO CONTROL FILTER !==
// √    - "" = ALL 
//  √   - FILTER BASED ON NAME AND BIO