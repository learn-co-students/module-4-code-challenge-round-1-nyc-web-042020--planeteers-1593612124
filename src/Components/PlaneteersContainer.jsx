import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  return (
    <ul className="cards">
      {props.planeteers.map(planeteer => {
        return <Planeteer planeteer={planeteer} key={planeteer.id} />
      })
      }
    </ul>
  )

};

export default PlaneteersContainer;
