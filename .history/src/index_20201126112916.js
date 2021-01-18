import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  // Babel converts to above
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // render gets called
    // console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it re-rendered');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      //return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render!
  render() {
    // console.log('render'); // renders twice - first on load, and then after getLocation
    // return (
    //   <div>
    //     Latitude: {this.state.lat}
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // );
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
