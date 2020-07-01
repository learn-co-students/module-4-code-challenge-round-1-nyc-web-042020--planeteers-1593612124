import React from 'react';

class Planeteer extends React.Component {

//     - IMAGE
//     - NAME
//     - BIO
//     - TWITTER HANDLE
//     - CONDITIONAL LOCATION
//         - NEED TERNARY LOGIC BASED ON BOOLEAN FROMUSA HANDLE IN COMPONENT

state = {
  clicked: false

}

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }



  render() {
  
    let {name, pictureUrl, bio, twitter, fromUSA, quote } = this.props.planeteer
  
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleClick} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked
            ?
            quote
            :
            bio
            }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>{fromUSA
                ?
                "USA-based"
                :
                "Working overseas"
              }</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;


// - See list of planeteers on the page, using the `Planeteer` component. The `Planeteer` component should 
// display the planeteer's image, name, bio, Twitter handle, and conditionally render where they are based. 
// If they are from the USA, the component should say "USA-based", otherwise it should say "Working overseas".

// √NEED FETCH GET
//  √   - IMAGE
//  √   - NAME
//     - BIO
          //√ - NEED CONDITIONAL TO TOGGLE BETWEEN BIO AND QUOTE 
// √    - TWITTER HANDLE
//  √   - CONDITIONAL LOCATION
//   √      - NEED TERNARY LOGIC BASED ON BOOLEAN FROMUSA HANDLE IN COMPONENT


// - Click on the image of the planeteer in the `Planeteer` component and see the quote for that planeteer in place of the bio. 
// If I click on the image again, the quote should again be replaced with the bio. If I click on another planeteer's image, it 
// toggles that planeteer's bio independent of any other planeteer's.

// √NEED ONCLICK WITHIN COMPONENT FOR IMAGE CLICK
//  √   - NEED CLICKED STATE BOOLEAN
//   √      - NEED TERNARY LOGIC BASED ON BOOLEAN STATE TO SWAP BETWEEN BIO AND QUOTE