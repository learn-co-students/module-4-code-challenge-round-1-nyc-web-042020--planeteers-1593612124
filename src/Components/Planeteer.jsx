import React from 'react';

class Planeteer extends React.Component {
    state = {
        bio: true,
    };

    handleClick = (e) => {
        this.setState({
            bio: !this.state.bio,
        });
    };

    render() {
        return (
            <li className="cards__item">
                <div className="card">
                    <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
                    <div className="card__content">
                        <div className="card__title">{this.props.planeteer.name}</div>
                        onClick={this.handleClick}
                        <p className="card__text">
                        {this.state.bio
                            ? this.props.planeteer.bio
                            : this.props.planeteer.quote
                        }
                        </p>
                        <div className="card__detail">
                            <p>{this.props.planeteer.twitter}</p>
                            <p>{this.props.planeteer.fromUSA
                                ? "USA-based"
                                : "Working overseas"
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default Planeteer;
