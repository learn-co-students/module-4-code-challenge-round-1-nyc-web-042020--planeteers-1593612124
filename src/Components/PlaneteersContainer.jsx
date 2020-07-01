import React from 'react';
import Planeteer from './Planeteer'
import { render } from '@testing-library/react';

const PlaneteersContainer = (props) => {
    let planeteersCards = props.planeteersArray.map((planeteerObj) => {
        return (
            <Planeteer
                key={planeteerObj.id}
                planeteer={planeteerObj}
            />
        );
    });



    return (
        <ul className="cards">
            {planeteersCards}
        </ul>
    );
}




    export default PlaneteersContainer;
