import React from 'react';
import OnePr from './OnePr';

function Projects({ onProjectClick }) {
  // Sample project data
  const projects = [
    { 
      id: 1, 
      title: 'JschlattReactionsMaker', 
      description: 'Makes Jschlatt React to your cursed videos', 
      details: 'Made this for the popular youtuber jschlatt, you give it a video and it will make a video where jschlatt reacts to it and does some silly reaction.', 
      imageUrl: 'resources/Jschlat.jpg',
      image: '',
      link: 'https://github.com/rizekTheGuy/JschlattReactionsMaker'
    },
    { 
      id: 2, 
      title: 'StreamersMangaMaker', 
      description: 'Make A Manga About Your Favourite Streamers', 
      details: 'With this program you can make a manga about your favourite streamers or youtubers, all you have to do is put their names and image into the program and it will make you a full manga, this program was made using AI and Python.', 
      imageUrl: 'resources/DougDoug.jpg',
      image: '',
      link: 'https://github.com/rizekTheGuy/StreamersMangaMaker'
    },
    { 
      id: 3, 
      title: 'RadiaMetric', 
      description: 'A game I made when I was 14', 
      details: 'This game whas made for the MiniJam GameJam I made it in 2 days, Still unironically play this game to this day.', 
      imageUrl: 'resources/k3ftjB.png',
      image: '',
      link: 'https://al-studio.itch.io/radiametric'
    },
  ];

  // Handle project click to show details
  const handleProjectClick = (project) => {
    onProjectClick(project); // Pass the clicked project back to the parent component (App)
  };

  return (
    <div>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)}>
            <OnePr project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;