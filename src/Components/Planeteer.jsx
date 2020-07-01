import React from 'react';

class Planeteer extends React.Component {

  state ={
    showQuote: false
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return { showQuote: !prevState.showQuote}
    })
  }

  render() {
    let { name, fromUSA, bio, pictureUrl, twitter, quote} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.showQuote ? bio : quote}</p>
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
