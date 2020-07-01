import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  state = {
    planeteerArray: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then((r) => r.json())
      .then((array) => {
        this.setState({
          planeteerArray: array,
        });
      });
  }

  returnArray = () => {
    let array = this.state.planeteerArray;

    // array = this.state.planeteerArray.filter
    //   (planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    return array;
  };

  searchPlaneteer = (searchText) => {
    console.log(this.state.searchTerm);
    this.setState({
      searchTerm: searchText,
    });
  };

  render() {
    // console.log(this.state.planeteerArray);
    let dispayArray = this.returnArray();
    return (
      <div>
        <Header />
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPlaneteer={this.searchPlaneteer}
        />
        <RandomButton />
        <PlaneteersContainer planeteers={dispayArray} />
      </div>
    );
  }
}

export default App;
