import React from 'react';
import { Mail, ExternalLink, Github, Layers } from 'lucide-react';
import './styles/main.scss';

interface ProjectTile {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  category: string;
}

const projects: ProjectTile[] = [
  {
    title: "Dealership Automation",
    description: "Real-time Google Sheets dashboard tracking incoming dealership inquiries via Gmail.",
    link: "https://docs.google.com/spreadsheets/d/1EWpRvbQVsPhdtG8D-JU_g4ee5TIqPOTtYeQeA5U6naI/edit",
    icon: <Mail size={32} />,
    category: "Automation"
  },
  {
    title: "Task Kanban",
    description: "Centralized task management. Set 'Pending' tasks in Sheets for Opi to execute.",
    link: "https://docs.google.com/spreadsheets/d/1Iuux-2wU7VP9fQvdQuBEocD8YvsIXpXvX_wgIZuv4y0/edit",
    icon: <Layers size={32} />,
    category: "Workflow"
  },
  {
    title: "Personal Portfolio",
    description: "The main portfolio website built with React, HTML, and SCSS.",
    link: "https://www.divithchhajed.com",
    icon: <ExternalLink size={32} />,
    category: "Portfolio"
  },
  {
    title: "GitHub Profile",
    description: "Repository for various coding projects and the Opi dashboard source.",
    link: "https://github.com/Divith27",
    icon: <Github size={32} />,
    category: "Development"
  }
];

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>OPI COMMAND<br />CENTER</h1>
        <p>Divith Chhajed & Opi — Operational Dashboard</p>
      </header>

      <div className="dashboard__grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dashboard__card"
          >
            <div className="dashboard__card-top">
              <div className="dashboard__card-icon">
                {project.icon}
              </div>
              <ExternalLink className="dashboard__card-arrow" size={20} />
            </div>
            <div className="dashboard__card-info">
              <span className="dashboard__card-category" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>
                {project.category}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.4, fontSize: '0.8rem', textAlign: 'center' }}>
        &copy; 2026 Opi Control System // Version 2.0.0
      </footer>
    </div>
  );
}

export default App;
