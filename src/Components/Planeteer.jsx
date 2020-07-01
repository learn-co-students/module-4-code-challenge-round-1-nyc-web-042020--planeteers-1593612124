import React from 'react';

class Planeteer extends React.Component {
  state = {
    clicked: false
  }

  handleClick = (e) => {
    this.setState((prevState) => this.setState({clicked: !prevState.clicked}))
  }

  render() {
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.obj
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{
              this.state.clicked ? quote : bio
            }</p>
            <div className="card__detail">
              <p>{twitter}</p><br></br>
              {fromUSA ? <p>USA-Based</p> : <p>Working Overseas</p>}
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
