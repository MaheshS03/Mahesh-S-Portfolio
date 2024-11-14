import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/project-1.jpg';
import IMG2 from '../../assets/project-2.jpg';
import IMG3 from '../../assets/project-3.webp';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie Suggestion App',
    description: 'The Movie Suggestion Application is a full-stack app built with the MERN stack, that allows users to search for movies, receive suggestions based on their preferences, and explore detailed information about each movie. The app aims to offer a simple and intuitive interface, making it easy for users to find movies they might enjoy.',
    github: 'https://github.com/MaheshS03/movie-suggestion-fe.git',
    demo: 'https://movie-suggestion-fe-one.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce BackEnd App',
    description: 'An e-commerce application built on the MERN stack, designed with a backend-heavy architecture to manage extensive data operations such as product management, user authentication, order processing and customer management. The backend is optimized for scalability and high performance.',
    github: 'https://github.com/MaheshS03/e-commerce-application-backend.git',
    demo: 'https://e-commerce-application-backend.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Twixter Chat App',
    description: 'Twixter is a dynamic chat application powered by Socket.IO, enabling real-time communication. Twixter allows users to engage in seamless one-on-one and group chats with live updates, so messages and notifications appear instantly, making it a reliable and interactive platform for staying connected in real-time.',
    github: 'https://github.com/MaheshS03/Twixter-chat-app.git',
    demo: 'coming-soon'
  }
];

const RecentWork = () => {
  const handleDemoClick = (demo, title) => {
    if (demo === 'coming-soon') {
      alert(`${title} - Coming Soon`);
    } else {
      window.open(demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        {projects.map(({ id, image, title, description, github, demo }) => (
          <article key={id} className='recentWork__item'>
            <div className='recentWork__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='recentWork__item-cta'>
              <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
              <button 
                onClick={() => handleDemoClick(demo, title)} 
                className='btn btn-primary'
              >
                Live Demo
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
