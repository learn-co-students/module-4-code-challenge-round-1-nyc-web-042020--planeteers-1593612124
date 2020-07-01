import React from "react";
import Planeteer from "./Planeteer";

const PlaneteersContainer = (props) => {
  let arrOfComponents = props.planeteers.map((planateerObj) => {
    return <Planeteer key={planateerObj.id} planeteer={planateerObj} />;
  });
  return <ul className="cards">{arrOfComponents}</ul>;
};

export default PlaneteersContainer;
