import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  // onSearchSubmit = (term) => {
  //   console.log(term);

  //   axios
  //     .get('https://api.unsplash.com/search/photos/', {
  //       params: { query: term },
  //       headers: {
  //         Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.data.results);
  //       console.log(response.data.total);
  //       this.setState({ image: response.data.results });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  async onSearchSubmit(term) {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos/',
      {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
        }
      }
    );

    console.log(response.data.results);
    this.setState({ imageList: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
