import React from 'react';

class Planeteer extends React.Component {

  state = {
    showBio: true
  }

  toggleBio = (e) => {
    this.setState((prevState) => {
      return {
        showBio: !prevState.showBio
      }
    })
  }

  render() {
    let {name, bio, born, fromUSA, id, pictureUrl, quote, twitter} = this.props.planeteerObj
    let d = new Date();
    let n = d.getFullYear();
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.toggleBio} src={pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" >{ this.state.showBio? bio : quote }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <br/>
              <p>Age: {n-born}</p> 
              <br/>             
              <p>{fromUSA? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
