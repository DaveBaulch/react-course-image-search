import React from 'react';

class ImageCard extends React.Component {
  render() {
    // destructuring
    const {description, urls} = this.props.image;
    return 

        <img
          alt={description}
          src={urls.regular}
        />       
      </div>
    );
  }
}

export default ImageCard;
