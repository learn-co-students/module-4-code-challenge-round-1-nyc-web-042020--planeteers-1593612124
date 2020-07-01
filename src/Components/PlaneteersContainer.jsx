import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteer => <Planeteer planeteer={planeteer} key={planeteer.id} getAge={props.getAge}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
