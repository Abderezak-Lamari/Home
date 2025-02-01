import React, { useState } from 'react';
import Gallery from "./Gallery";
import Home from "./Home";
import Projects from "./Projects";
import Welcom from './Welcom';
import Welcome from "./Header";
import Blogs from './Blogs';
import Shitposts from './Shitposts';

function App() {
  const [activeTab, setActiveTab] = useState('Home'); // Initialize active tab to Home
  const [selectedProject, setSelectedProject] = useState(null); // To store the selected project details
  const [selectedBlog, setSelectedBlog] = useState(null); // To store the selected blog details
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedClip, setSelectedClip] = useState(null);

  const handleTabClick = (tabName) => {
    setSelectedImage(null);
    setSelectedClip(null);
    setActiveTab(tabName);
    setSelectedProject(null); // Clear selected project when switching tabs
    setSelectedBlog(null); // Clear selected blog when switching tabs
  };

  // Function to render the active component based on the activeTab state
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects onProjectClick={setSelectedProject} />;
      case 'Pictures':
        return <Gallery setSelectedImage={setSelectedImage}/>;
      case 'Blogs':
        return <Blogs onBlogClick={setSelectedBlog} />;
      case 'Shitposts':
        return <Shitposts setSelectedClip={setSelectedClip}/>; // Placeholder, replace with your component
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <Welcome />
          {selectedProject ? (
            <div className="project-details">
              <h2 className="CenterTxt">-- {selectedProject.title} --</h2>
              <p className='textForm'>{selectedProject.details}</p>
            </div>
          ) : selectedBlog ? (
            <div className="blog-details">
              <h2 className="CenterTxt">-- {selectedBlog.title} --</h2>
              <p className='textForm'>{selectedBlog.details}</p>
            </div>
          ) : selectedImage ? (
              <img className='ShowImage' src={selectedImage}></img>
          ) : selectedClip ? (
              <video className='ShowImage ShowVideo' controls autoPlay src={selectedClip}></video>
          ) : (
            <Welcom />
          )}
        </div>
        <div className="right">
          <div className="bar">
            <button className={activeTab === 'Home' ? "tab active" : "tab txthover"} onClick={() => handleTabClick('Home')}>Home</button>
            <button className={activeTab === 'Projects' ? "tab active" : "tab txthover"} onClick={() => handleTabClick('Projects')}>Projects</button>
            <button className={activeTab === 'Pictures' ? "tab active" : "tab txthover"} onClick={() => handleTabClick('Pictures')}>Pictures</button>
            <button className={activeTab === 'Blogs' ? "tab active" : "tab txthover"} onClick={() => handleTabClick('Blogs')}>Blog</button>
            <button className={activeTab === 'Shitposts' ? "tab active" : "tab txthover"} onClick={() => handleTabClick('Shitposts')}>Shitposts</button>
          </div>
          {renderActiveComponent()}
        </div>
      </div>
    </>
  );
}

export default App;
