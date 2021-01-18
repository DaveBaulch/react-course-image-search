import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);

    axios
      .get('https://api.unsplash.com/search/photos/', {
        headers: {
          Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
        }
      })
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
