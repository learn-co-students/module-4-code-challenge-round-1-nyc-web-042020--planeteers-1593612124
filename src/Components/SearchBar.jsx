import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input onChange={e=>this.props.handleChange(e)} className='searchTerm' type='text' name='search' value={this.props.search} />
        <input onChange={e=>this.props.handleCheck(e)} type='checkbox' name='sort'/>
        <label htmlFor='sort'>Sort by Age</label>
      </div>
    );
  }

}

export default SearchBar;
