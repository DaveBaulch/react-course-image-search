import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className=>
        <form>
          <label for="search">Search:</label>
          <br />
          <input id="search" type="text"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
