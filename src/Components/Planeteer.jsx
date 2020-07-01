import React from 'react';

// let currentYear = new Date()
// console.log(currentYear.getFullYear())

class Planeteer extends React.Component {

  state={
    isClicked: true
  }

  handleClick = () => {
    this.setState(prevState => {
      return{
        isClicked: !prevState.isClicked
      }
    })
  }

  render() {
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    // let currentYear = new Date()
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            {/* <p>Age: {currentYear.getFullYear() - born}</p> */}
            <p className="card__text">{this.state.isClicked ? bio : quote}</p>
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
