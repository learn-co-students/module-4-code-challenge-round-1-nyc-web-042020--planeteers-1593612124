import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  let arrayOfPlaneteers = props.planeteers.map((planeteerPOJO) => {
    return <Planeteer
      planeteer={planeteerPOJO}
      key={planeteerPOJO.id}
    />
  })

  return (
    <ul className="cards">
      {
        arrayOfPlaneteers
      }
    </ul>
  )

};

export default PlaneteersContainer;
