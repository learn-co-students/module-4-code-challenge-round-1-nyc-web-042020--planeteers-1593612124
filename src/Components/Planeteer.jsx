import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked
      }
    })
  }

  render() {
    //deconstruct props.planeteer 
    console.log(this.state.clicked)
    let {bio, born, fromUSA, name, pictureUrl, quote, twitter} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

// If they are from the USA, 
//the component should say "USA-based", otherwise it should say "Working overseas".