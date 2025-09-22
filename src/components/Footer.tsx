import React from 'react';
import styles from './css/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Harry Ruiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;