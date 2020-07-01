import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteersComponents = props.planeteers.map(planeteer => {
    return <Planeteer 
    key={planeteer.id} 
    planeteer={planeteer}
     />
  })

  return (
    <ul className="cards">
      { planeteersComponents }
    </ul>
  )

};

export default PlaneteersContainer;
