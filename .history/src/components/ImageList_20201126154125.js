import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  const props.images.map((image) => {
    return <img src={image.urls.regular} alt="" />;
  });
};

export default ImageList;
