import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);

    axios
      .get('https://data.police.uk/api/forces')
      .then((response) => {
        console.log(response.data);
        // const forces = response.data;
        // this.setState({ forces });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
