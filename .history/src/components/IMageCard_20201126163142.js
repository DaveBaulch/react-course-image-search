import React from 'react';

class ImageCard extends React.Component {
  render() {
    // destructuring
    const {description, urls} = this.props.image;
    return (
      <div>
        // <img
        //   alt={this.props.image.description}
        //   src={this.props.image.urls.regular}
        // />
        <img
          alt={description} src={urls.regular}
        />      
      </div>
  
  }
}

export default ImageCard;
