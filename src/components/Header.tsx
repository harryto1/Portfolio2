import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useIsMobile } from '../hooks/useMediaQuery';
import styles from './css/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'contact', label: 'Contact' }
  ];

  const renderNavigationLinks = (isMobileNav: boolean = false) => (
    <ul>
      {navigationLinks.map(({ to, label }) => (
        <li key={to}>
          <Link 
            to={to} 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass={styles.active} 
            className={styles.link}
            onClick={isMobileNav ? closeMenu : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <Link to="home" smooth={true} duration={500} className={styles.logoLink}>Harry Ruiz</Link>
        </div>
        
        {!isMobile && (
          <nav className={`${styles.nav} ${styles.desktopNav}`}>
            {renderNavigationLinks()}
          </nav>
        )}
        
        {isMobile && (
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen1 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen2 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen3 : ''}`}></span>
          </button>
        )}

        {isMobile && (
          <>
            {/* Mobile Navigation Overlay */}
            <div 
              className={`${styles.mobileNavOverlay} ${isMenuOpen ? styles.mobileNavOverlayOpen : ''}`} 
              onClick={closeMenu}
              aria-hidden={!isMenuOpen ? "true" : "false"}
            />
            
            {/* Mobile Navigation Menu */}
            <nav 
              className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
              aria-hidden={!isMenuOpen ? "true" : "false"}
            >
              {renderNavigationLinks(true)}
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;