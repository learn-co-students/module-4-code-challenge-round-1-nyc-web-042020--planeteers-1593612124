import React from 'react';

const Planeteer = ({planeteer, toggleImage, handleClick}) => {
  const {name, fromUSA, bio, quote, pictureUrl, twitter, isClicked} = planeteer 
  toggleImage = (img) => {
    if (img === pictureUrl) {
      return bio 
    } 
    else {
      return quote 
    }
  }
  
  handleClick = (e) => {
    e.target.src = toggleImage(e.target.src) 
  }

    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={e => handleClick(e)} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{isClicked ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
}

export default Planeteer;
