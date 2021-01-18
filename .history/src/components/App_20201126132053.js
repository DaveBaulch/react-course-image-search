import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit />
      </div>
    );
  }
}

export default App;
