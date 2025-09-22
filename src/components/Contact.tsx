import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './css/Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Clear status messages after 5 seconds
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
    // I know this is not fully secure but for now it's okay. 
      const serviceId = 'service_yq0b53u'; 
      const templateId = 'template_oo8i0hg'; 
      const publicKey = 'ZoFKUeGDUp3X9i9tx'; 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'harry.ruiz6@upr.edu', 
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoCard}>
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactItemContent}>
                    <strong>Email</strong>
                    <a href="mailto:harry.ruiz6@upr.edu">harry.ruiz6@upr.edu</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📱</div>
                  <div className={styles.contactItemContent}>
                    <strong>Phone</strong>
                    <a href="tel:+17873859381">+1 (787) 385-9381</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactItemContent}>
                    <strong>Location</strong>
                    <span>Mayagüez, Puerto Rico</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.socialSection}>
                <h4>Connect with me</h4>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/harryto1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <span className={styles.socialIcon}>💻</span>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <span className={styles.socialIcon}>💼</span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Send me a message</h3>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`${styles.btn} ${styles.btnPrimary}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;