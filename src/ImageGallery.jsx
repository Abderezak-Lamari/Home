import React from 'react';
import { useState } from 'react';

const ImageGallery = ({ setSelectedImage, Source }) => {

    const ShowImage = () => {
        setSelectedImage(Source);
    }

  return (
    <img className="igal onhoverImg" src={Source} onClick={ShowImage}></img>
  );
};

export default ImageGallery