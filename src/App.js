import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
    state = {
        planeteersArray: [],
    };



    componentDidMount() {
        fetch('http://localhost:4000/planeteers')
            .then((r) => r.json())
            .then((planeteers) => {
                this.setState({
                    planeteersArray: planeteers,
                });
            });
    }

    returnsPlaneteersArray = () => {
        let planeteers = this.state.planeteersArray;
        return planeteers;
    };



    render() {
        let planeteersArray = this.returnsPlaneteersArray();
        return (
            <div>
                <Header />
                <SearchBar />
                <RandomButton />
                <PlaneteersContainer
                    planeteersArray={planeteersArray}
                />
            </div>
        );
    }

}

export default App;
