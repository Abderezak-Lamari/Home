import React from 'react';
import Oneblog from './Oneblog'

function Blogs({ onBlogClick }) {
  // Sample blog data
  const blogs = [];

  // Handle blog click to show details
  const handleBlogClick = (blog) => {
    onBlogClick(blog); // Pass the clicked blog back to the parent component (App)
  };

  return (
    <div>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} onClick={() => handleBlogClick(blog)}>
            <Oneblog blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
