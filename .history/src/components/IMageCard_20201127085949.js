import React from 'react';

class ImageCard extends React.Component {
class Forces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forces: []
    }
  }  
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
