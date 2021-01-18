import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  // api key d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
