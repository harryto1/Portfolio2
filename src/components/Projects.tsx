import React, { useState } from 'react';
import styles from './css/Projects.module.css';
import projectsInfo, { type Project } from '../data/projects/projectsInfo';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Projects</h2>
          <p className={styles.sectionSubtitle}>
            Click on any project to explore detailed information, technologies used, and development insights
          </p>
          <div className={styles.projectsGrid}>
            {projectsInfo.map(project => (
              <div key={project.id} className={styles.projectCard} onClick={() => openModal(project)}>
                <div className={styles.projectImage}>
                  <img src={project.imageUrl} alt={project.title} decoding="async" loading="lazy" />
                  <div className={styles.imageOverlay}>
                    <span className={styles.clickHint}>Click for details</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectMeta}>
                    <span className={styles.duration}>{project.developmentTime}</span>
                    <span className={styles.startDate}>{project.startDate}</span>
                  </div>
                  <div className={styles.projectTechnologies}>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techTagMore}>+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.githubUrl && (
                      <button 
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        📂 GitHub
                      </button>
                    )}
                    {project.liveUrl && (
                        <button
                          className={`${styles.btn} ${styles.btnPrimary}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          🚀 Live Demo
                        </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;