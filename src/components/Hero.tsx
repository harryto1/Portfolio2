import React from 'react';
import { Link } from 'react-scroll';
import styles from './css/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Harry Ruiz</span>
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
    </section>
  );
};

export default Hero;