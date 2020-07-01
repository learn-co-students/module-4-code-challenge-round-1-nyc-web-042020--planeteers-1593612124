import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder={"Search for planeteers"}
                    onChange={(e) => this.props.handlesearch(e.target.value)}
                />
      </div>
    );
  }

}

export default SearchBar;
