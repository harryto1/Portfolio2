import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import styles from './css/Hero.module.css';
import profileImg from '../assets/harry.jpg';

const Hero: React.FC = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getThreshold = () => {
      if (window.innerWidth <= 480) return 0.1;
      if (window.innerWidth <= 768) return 0.2;
      return 0.3;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { 
        threshold: getThreshold(),
        rootMargin: '0px 0px 50px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroImage} ${isInViewport ? styles.fadeInRight : ''}`}>
            <div className={styles.imageContainer}>
              <img 
                src={profileImg}
                alt="Harry Ruiz - Software Developer" 
                className={styles.profileImage}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
          </div>
          <div className={`${styles.heroText} ${isInViewport ? styles.fadeInLeft : ''}`}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>
                {isInViewport ? (
                  <ReactTyped
                    strings={["Harry Ruiz", "a Software Developer", "a Student"]}
                    typeSpeed={70}
                    backSpeed={60}
                    backDelay={2000}
                    loop
                    showCursor={true}
                    cursorChar="|"
                  />
                ) : (
                  <span className={styles.staticText}>Harry Ruiz</span>
                )}
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