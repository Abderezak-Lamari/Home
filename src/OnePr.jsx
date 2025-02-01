import React from 'react';

const OnePr = ({ project }) => {
  return (
    <div className="Onepr gray-on-hover">
      <div className="PrText">
        <h2 className="notselect marginbottom">{project.title}</h2>
        <p className="notselect ">{project.description}</p>
      </div>
      <div>
        <img className="PrPic" src={project.imageUrl || "default-image.jpg"} alt={project.title} />
      </div>
    </div>
  );
};

export default OnePr;
