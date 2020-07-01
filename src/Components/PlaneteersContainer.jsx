import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
// console.log(props.planeteers)
  let arrayOfPlaneteers = props.planeteers.map((planeteerPojo) => {
    return <Planeteer 
        planeteer = {planeteerPojo}
        key = {planeteerPojo.id}
    />
  })


  // console.log(props)
  return (
    <ul className="cards">
      {
        arrayOfPlaneteers
      }
    </ul>
  )

};

export default PlaneteersContainer;
