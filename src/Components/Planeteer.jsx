import React from 'react';

class Planeteer extends React.Component {

  state = {
    bio: true,
    fromUSA: true
  }

  handleClick = (event) => {
    this.setState({ bio: !this.state.bio })
  }

  render() {
    const { name, fromUSA, born, bio, quote, pictureUrl, twitter } = this.props.planeteer

    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.bio ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{this.state.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
