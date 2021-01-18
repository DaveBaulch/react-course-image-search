import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  props.images.map((image) => {
    return <img src={image.urls.regul} alt="" />;
  });
};

export default ImageList;
