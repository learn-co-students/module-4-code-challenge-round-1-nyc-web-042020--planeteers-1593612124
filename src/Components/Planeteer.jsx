import React from 'react';

class Planeteer extends React.Component {

  state = {
    displayBio: true
  }

  handleClick = (event) => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
    let { name, fromUSA, bio, quote, pictureUrl, twitter, born } = this.props.planeteer

    let date = new Date ()
    let currentYear = date.getFullYear()
    return (
      <li className="cards__item">
        <div className="card" >
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title" >{name}</div>
            <p className="card__text">{this.state.displayBio ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
            </div>
              <p>{fromUSA ? "USA-based" : "Working overseas"}</p>
              <p>Age: {currentYear - parseInt(born)} years</p>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
