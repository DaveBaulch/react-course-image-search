import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="search"></label>
          <input id="search" type="text"></input>
        </form>
      </div>
    )
  }
}

export default SearchBar;
