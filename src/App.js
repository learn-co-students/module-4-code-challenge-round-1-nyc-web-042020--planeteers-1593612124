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
    return this.state.planeteerArray;
  };

  render() {
    // console.log(this.state.planeteerArray);
    let dispayArray = this.returnArray();
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} />
        <RandomButton />
        <PlaneteersContainer planeteers={dispayArray} />
      </div>
    );
  }
}

export default App;
