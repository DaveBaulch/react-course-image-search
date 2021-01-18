import React from 'react';

class ImageCard extends React.Component {
  render() {
    // destructuring
    const { description , urls};
    return (
      <div>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
