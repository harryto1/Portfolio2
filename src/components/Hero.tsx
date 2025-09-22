import React from 'react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import styles from './css/Hero.module.css';
import profileImg from '../assets/harry.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <img 
                src={profileImg}
                alt="Harry Ruiz - Software Developer" 
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>
                <ReactTyped
                  strings={["Harry Ruiz", "a Software Developer", "a Student"]}
                  typeSpeed={70}
                  backSpeed={60}
                  backDelay={2000}
                  loop
                />
              </span>
            </h1>
            <p className={styles.heroSubtitle}>Software Engineering Student</p>
            <p className={styles.heroDescription}>
              I'm a software engineering student passionate about building innovative solutions and learning new technologies.
            </p>
            <div className={styles.heroButtons}>
              <Link to="projects" smooth={true} duration={500} className={`${styles.btn} ${styles.btnPrimary}`}>View My Work</Link>
              <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.btnSecondary}`}>Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;