import React from 'react';

const Oneblog = ({ blog }) => {
  return (
    <div className="Onepr gray-on-hover">
      <div className="PrText">
        <h2 className="notselect">{blog.title}</h2>
        <p className="notselect">{blog.description}</p>
      </div>
    </div>
  );
};

export default Oneblog