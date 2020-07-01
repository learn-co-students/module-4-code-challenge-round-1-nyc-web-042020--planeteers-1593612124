import React from 'react';

class Planeteer extends React.Component {
  state = {
    clicked: true
  }

  handleClick = () => {
    this.setState(prevState => {
      return {clicked: !prevState.clicked}
    })
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} onClick={this.handleClick} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
    <p className="card__text" >{this.state.clicked ? this.props.planeteer.bio : this.props.planeteer.quote} </p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? 'USA-based' : 'Working overseas'}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
