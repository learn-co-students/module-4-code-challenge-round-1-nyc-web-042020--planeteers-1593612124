import React from 'react';

class Planeteer extends React.Component {


  state = {
    isClicked: false
  }

  handleClick = (event) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" 
          onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.isClicked ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? 'USA-Based' : 'Working Overseas'}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
