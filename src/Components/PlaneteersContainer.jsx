import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

let planArr = props.planeteers.map((p)=>{
  return <Planeteer
  key = {p.id}
  planeteer = {p}
  />
})

  return (
    <ul className="cards">
      {
        planArr
      }
    </ul>
  )

};

export default PlaneteersContainer;
