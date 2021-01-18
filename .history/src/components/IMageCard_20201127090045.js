import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.cre
  },  
  render() {
    // destructuring
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
