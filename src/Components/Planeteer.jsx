import React from 'react';

class Planeteer extends React.Component {
  state={
    clickedByUser: false
  }
  
  handleClick = (evt) => {
    this.setState((prevState) => {
      return {
        clickedByUser: !prevState.clickedByUser
      }
    })
  }

  render() {
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img 
            src={pictureUrl} 
            alt={name} 
            className="card__image"
            onClick={this.handleClick}
          />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">
                {this.state.clickedByUser === false 
                  ? 
                  bio
                  :
                  quote
                }
            </p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA === true ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
