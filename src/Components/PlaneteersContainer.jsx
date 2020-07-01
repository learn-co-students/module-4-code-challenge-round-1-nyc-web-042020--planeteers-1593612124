import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteersObject = props.planeteers.map(planeteer => {
    return <Planeteer
    key={planeteer.id}
    planeteer={planeteer}
    />
  })

  return (
    <ul className="cards">
      {
        planeteersObject
      }
    </ul>
  )

};

export default PlaneteersContainer;
