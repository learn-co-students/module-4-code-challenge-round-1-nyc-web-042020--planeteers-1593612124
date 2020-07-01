import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let componentArr = props.planeteerList.map((planeteer) => {
    return <Planeteer
    planeteerObj = {planeteer}
    key = {planeteer.id}
    />
  })



  return (
    <ul className="cards">
      {componentArr}
    </ul>
  )

};

export default PlaneteersContainer;
