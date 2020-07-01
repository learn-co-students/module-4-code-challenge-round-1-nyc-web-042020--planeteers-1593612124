import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteersArray = props.planeteers.map((x) => { 
    return <Planeteer obj={x} key={x.id} />
  }
  )

  return (
    <ul className="cards">
      {
       planeteersArray
      }
    </ul>
  )

};

export default PlaneteersContainer;
