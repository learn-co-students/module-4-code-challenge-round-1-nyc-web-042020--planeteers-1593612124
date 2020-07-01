import React from "react";

let t1 = new Date();
let year = t1.getFullYear();

class Planeteer extends React.Component {
  state = {
    cardInfo: true,
  };

  handleClick = (e) => {
    this.setState({
      cardInfo: !this.state.cardInfo,
    });
  };

  render() {
    // console.log(year);
    let {
      name,
      fromUSA,
      born,
      bio,
      quote,
      pictureUrl,
      twitter,
    } = this.props.planeteer;
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
            <p className="card__text">{this.state.cardInfo ? bio : quote}</p>
            <div className="card__detail">
              <p>Age: {year - born}</p>
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
