import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log('Input was clicked');
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label for="search">Image Search</label>
            <input
              id="search"
              type="text"
              onChange={this.onInputChange}
              onClick={this.
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
