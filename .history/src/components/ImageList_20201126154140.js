import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map((image) => {
    return <img src={image.urls.regular} alt="" />;
  });

  return <div>
};

export default ImageList;
