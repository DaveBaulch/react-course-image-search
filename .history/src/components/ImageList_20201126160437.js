import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  console.log(props.images);

  // const images = props.images.map((image) => {
  //   return (
  //     <img src={image.urls.regular} alt={image.description} key={image.id} />
  //   );
  // });

  // or - destructuring the image properties
  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });

  return <div class>{images}</div>;
};

export default ImageList;
