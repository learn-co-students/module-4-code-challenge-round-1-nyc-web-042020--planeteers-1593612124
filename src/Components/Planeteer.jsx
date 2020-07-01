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
    // let {name, bio, born, fromUSA, id, pictureUrl, quote, twitter} = this.props
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.toggleBio} src={this.props.planeteerObj.pictureUrl} alt={"RENDER PERSON NAME"} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteerObj.name}</div>
            <p className="card__text" >{ this.state.showBio? this.props.planeteerObj.bio : this.props.planeteerObj.quote }</p>
            <div className="card__detail">
              <p>{this.props.planeteerObj.twitter}</p>
              
              <p>{this.props.planeteerObj.fromUSA? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
