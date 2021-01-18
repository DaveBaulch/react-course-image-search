import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  props.images.map(image => <div>image</div>)
    
  );
};

export default ImageList;
