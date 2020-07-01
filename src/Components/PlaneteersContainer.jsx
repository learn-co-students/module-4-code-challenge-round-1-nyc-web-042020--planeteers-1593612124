import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  let arrayOfComps = props.planeteers.map(planeteerPojo => {
    return <Planeteer key={planeteerPojo.id} planeteer={planeteerPojo}/>
  })

  return (
    <ul className="cards">
      {
        arrayOfComps
      }
    </ul>
  )
}


export default PlaneteersContainer;
