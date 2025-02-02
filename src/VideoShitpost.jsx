import React from 'react';
import { useState } from 'react';

const VideoShitpost = ({ setSelectedClip, Source }) => {

  let name = Source.replace("Videos/", "");
  name = name.replace(".mp4", "");

    const ShowClip = () => {
        setSelectedClip(Source);
    }

  return (
    <div className="Onepr gray-on-hover" onClick={ShowClip}>
      <div className="PrText">
        <h2 className="notselect">{name}</h2>
      </div>
    </div>
  );
};

export default VideoShitpost