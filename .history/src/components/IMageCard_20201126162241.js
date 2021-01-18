import React from 'react';

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.image.descr} src={props.src} />
      </div>
    );
  }
}

export default ImageCard;
