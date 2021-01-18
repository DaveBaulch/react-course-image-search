import React from 'react';

const ImageList = (props) => {
  console.log(props.images);
  return (
    <div>
      props.images.map((image) => {
        return (
          image
        );
      });

    </div>
  );
};

export default ImageList;
