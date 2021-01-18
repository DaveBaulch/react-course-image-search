import React from 'react';

class ImageList extends React.Component {
  state = { term: '' };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log('Input was clicked');
  // }

  // the arrow function binds the value of 'this' inside onFormSubmit
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (

    );
  }
}

export default class ImageList extends React.Component {
;

