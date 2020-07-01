import React from 'react';

class Planeteer extends React.Component {

  state = {
    picClick: false,
  }

  handleClick = () => {
    this.setState((prevState)=>{
      return {picClick: !prevState.picClick}
    })
  }

  render() {
    let {name, fromUSA, born, bio, pictureUrl,twitter, quote} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.picClick ? this.props.planeteer.quote : this.props.planeteer.bio }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas" }</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
