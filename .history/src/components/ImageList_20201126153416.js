import React from 'react';

const ImageList = (props) => {
  console.log(props.images);
  return (
    <div>
      {option.map((item) => {
        return (
          <option value={item.id} key="item.id">
            {item.name}
          </option>
        );
      })}
    </div>
  );
};

export default ImageList;
