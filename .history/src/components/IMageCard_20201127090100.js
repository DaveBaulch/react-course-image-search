import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  },  
  render() {
    // destructuring
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={ } alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
