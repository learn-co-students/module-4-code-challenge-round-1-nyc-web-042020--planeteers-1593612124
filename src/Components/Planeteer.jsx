import React from 'react';

class Planeteer extends React.Component {

 state ={
   bio: true

 }

 handleClick = e => {
   this.setState({
     bio: !this.state.bio
   })
 }

  render() {
    let {pictureUrl, name, bio, twitter, fromUSA, quote } =this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text"onClick={this.handleClick}> {
              this.state.bio ?
              bio
              :
              quote
            } </p>
            <div className="card__detail">
              <p>{"twitter"}</p>
              <p>{"CONDITIONALLY RENDER WHETHER THE PERSON IS USA-BASED OR WORKING OVERSEAS"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
