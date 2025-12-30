import React from 'react';
import type { Project } from '../data/projects/projectsInfo';
import styles from './css/ProjectModal.module.css';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const GalleryItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [orientation, setOrientation] = React.useState<'landscape' | 'portrait' | 'square'>('landscape');
    const isGif = src.toLowerCase().endsWith('.gif');

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        const { naturalWidth: w, naturalHeight: h } = img;
        if (!w || !h) return;
        if (Math.abs(w - h) < w * 0.08) setOrientation('square');
        else if (w > h) setOrientation('landscape');
        else setOrientation('portrait');
    };

    return (
      <div className={`${styles.galleryItem} ${styles[orientation]} ${isGif ? styles.gif : ''}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={styles.galleryImage}
          draggable={false}
        />
      </div>
    );
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className={styles.modalHeader}>
          <img src={project.imageUrl} alt={project.title} className={styles.modalImage} decoding="async" />
          <div className={styles.modalHeaderInfo}>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <div className={styles.projectMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Started:</span>
                <span className={styles.metaValue}>{project.startDate}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>{project.developmentTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Project Overview</h3>
            {project.detailedDescription.map((desc, idx) => (
              <React.Fragment key={idx}>
                <p className={styles.detailedDescription}>{desc}</p><br />
              </React.Fragment>
            ))}
            {project.imagePaths && project.imagePaths.length > 0 && (
              <div className={styles.imageGallery}>
                {project.imagePaths.map((path, idx) => (
                  <GalleryItem
                    key={idx}
                    src={path}
                    alt={`${project.title} image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Technologies & Frameworks</h3>
            <div className={styles.techSection}>
              <div className={styles.techCategory}>
                <h4>Languages</h4>
                <div className={styles.techTags}>
                  {project.languages.map(lang => (
                    <span key={lang} className={`${styles.techTag} ${styles.languageTag}`}>{lang}</span>
                  ))}
                </div>
              </div>
              <div className={styles.techCategory}>
                <h4>Frameworks</h4>
                <div className={styles.techTags}>
                  {project.frameworks.map(framework => (
                    <span key={framework} className={`${styles.techTag} ${styles.frameworkTag}`}>{framework}</span>
                  ))}
                </div>
              </div>
              <div className={styles.techCategory}>
                <h4>Technologies</h4>
                <div className={styles.techTags}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={`${styles.techTag} ${styles.technologyTag}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Key Features</h3>
            <ul className={styles.featureList}>
              {project.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Challenges & Solutions</h3>
            <ul className={styles.challengeList}>
              {project.challenges.map((challenge, index) => (
                <li key={index} className={styles.challengeItem}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Key Learnings</h3>
            <ul className={styles.learningList}>
              {project.learnings.map((learning, index) => (
                <li key={index} className={styles.learningItem}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.modalFooter}>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className={`${styles.btn} ${styles.btnPrimary}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🚀 Live Demo
            </a>
          )}
          {project.githubUrl &&  (
            <a 
              href={project.githubUrl} 
              className={`${styles.btn} ${styles.btnSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;