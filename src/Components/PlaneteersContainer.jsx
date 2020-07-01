import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  let arrayOfPlaneteerComponenets = props.planeteers.map(planeteer => {
    return <Planeteer key={planeteer.id} planeteer={planeteer} />
  })

  return (
    <ul className="cards">
      {
        arrayOfPlaneteerComponenets
      }
    </ul>
  )

};

export default PlaneteersContainer;
