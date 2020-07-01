import React from 'react';

class Planeteer extends React.Component {
  state = {
    showBio: true 
  }
   
  handleClick = (e) => {
    const para = this.state.showBio 
    this.setState({
      showBio: !para 
    }) 
  }
  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={e => this.handleClick(e)} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.showBio ? this.props.planeteer.bio : this.props.planeteer.quote}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
    
}

export default Planeteer;
