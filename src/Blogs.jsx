import React from 'react';
import Oneblog from './Oneblog'

function Blogs({ onBlogClick }) {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'Welcome To my Blogs',
      description: '6/12/2024',
      details: 'I dont know what to write in here, I just wanted to say this is the start of my blog posting journey, I will be posting here what I did in some of my days (I dont think  i will be doing this everyday), I will be posting my progress on my projects or maybe what I saw or experienced that day.',
    },
    {
      id: 2,
      title: 'Made some Progress on the website',
      description: '12/7/2024',
      details: 'Made some Progress on the website, but its still not out in the public yet because i still need to finish some stuff.',
    },
    {
      id: 2,
      title: 'Ive finally set up NeoVim',
      description: '12/26/2024',
      details: 'And now i can compile and run c programs in it using GCC.',
    }
  ];

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
