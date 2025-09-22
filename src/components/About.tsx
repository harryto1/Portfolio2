import React from 'react';
import styles from './css/About.module.css';
import uprmLogo from "../assets/logo-uprm.png";

const About: React.FC = () => {
  const workExperience = [
    {
      company: "MiUni LLC",
      companyUrl: "https://www.miunipr.com",
      logoUrl: "https://www.miunipr.com/favicon.ico",
      position: "Software Developer",
      duration: "2025 - Present",
      location: "Puerto Rico",
      description: "Developing mobile applications using modern frameworks and technologies. Collaborating with cross-functional teams to deliver high-quality mobile solutions.",
      technologies: ["Flutter", "Dart", "Firebase", "Git"],
      achievements: [
        "Built responsive mobile applications for iOS and Android platforms.",
        "Improved security by using encryption techniques to manage and hide sensitive information from the client securely.",
        "Refactored Flutter Frontend to use Firebase Functions for certain API calls."
      ]
    }
  ];

  const education = [
    {
      institution: "University of Puerto Rico - Mayagüez",
      institutionUrl: "https://www.uprm.edu",
      logoUrl: uprmLogo,
      degree: "Bachelor of Science in Software Engineering",
      duration: "2024 - Expected 2029",
      status: "2nd Year Student",
      gpa: "4.0",
      relevantCoursework: [
        "Data Structures",
        "Advanced Programming",
        "Fundamentals of Computing",
        "Calculus I & II",
      ],
      activities: [
        "Participating in coding competitions and hackathons",
        "Self-directed learning in AI and machine learning"
      ]
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.aboutContent}>
          {/* Personal Introduction */}
          <div className={styles.introSection}>
            <div className={styles.aboutText}>
              <p>
                I am a <strong>second-year Software Engineering student</strong> at the <a href="https://www.uprm.edu" target="_blank" rel="noopener noreferrer" className={styles.introLink}>University of Puerto Rico – Mayagüez</a>, with strong interests in <span className={styles.introEmphasis}>coding</span>, <span className={styles.introEmphasis}>problem-solving</span>, <span className={styles.introEmphasis}>mathematics</span>, and <span className={styles.introEmphasis}>science</span>. My long-term goal is to pursue a career as an <strong>AI researcher and engineer</strong>, and I am committed to building the technical expertise needed to achieve it.
              </p>
              <p>
                Currently, I am advancing my knowledge through coursework in <strong>Data Structures</strong> and gaining hands-on industry experience as a <i>software developer</i> at <strong>MiUni LLC</strong>. Beyond the classroom, I continuously explore <strong>new programming languages</strong> and <strong>frameworks</strong>, driven by a passion for <i>learning</i> and <i>growth</i> as a developer.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <h3>2+</h3>
                <p>Years Experience</p>
                <span className={styles.statDetail}>Coding & Development</span>
              </div>
              <div className={styles.stat}>
                <h3>10+</h3>
                <p>Projects Completed</p>
                <span className={styles.statDetail}>Web & Mobile Apps</span>
              </div>
              <div className={styles.stat}>
                <h3>5+</h3>
                <p>Technologies</p>
                <span className={styles.statDetail}>Languages & Frameworks</span>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className={styles.experienceSection}>
            <h3 className={styles.subsectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              Work Experience
            </h3>
            <div className={styles.experienceList}>
              {workExperience.map((job, index) => (
                <div key={index} className={styles.experienceCard}>
                  {/* Logo Watermark */}
                  <div className={styles.logoWatermark}>
                    <img 
                      src={job.logoUrl} 
                      alt={`${job.company} logo`}
                      className={styles.companyLogo}
                      onError={(e) => {
                        // Fallback to company initials if logo fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className={styles.logoFallback}>
                      {job.company.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>

                  <div className={styles.experienceHeader}>
                    <div className={styles.experienceTitle}>
                      <h4 className={styles.position}>{job.position}</h4>
                      <h5 className={styles.company}>
                        <a 
                          href={job.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.companyLink}
                        >
                          {job.company}
                          <span className={styles.externalLinkIcon}>🔗</span>
                        </a>
                      </h5>
                    </div>
                    <div className={styles.experienceMeta}>
                      <span className={styles.duration}>{job.duration}</span>
                      <span className={styles.location}>{job.location}</span>
                    </div>
                  </div>
                  
                  <p className={styles.experienceDescription}>{job.description}</p>
                  
                  <div className={styles.experienceDetails}>
                    <div className={styles.achievements}>
                      <h6>Key Achievements:</h6>
                      <ul>
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.technologies}>
                      <h6>Technologies Used:</h6>
                      <div className={styles.techTags}>
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={styles.educationSection}>
            <h3 className={styles.subsectionTitle} id={styles.educationSectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Education
            </h3>
            <div className={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  {/* Logo Watermark */}
                  <div className={styles.logoWatermark}>
                    <img 
                      src={edu.logoUrl} 
                      alt={`${edu.institution} logo`}
                      className={styles.institutionLogo}
                      onError={(e) => {
                        // Fallback to institution initials if logo fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className={styles.logoFallback}>
                      {edu.institution.split(' ').filter(word => word.length > 2).map(word => word[0]).join('')}
                    </div>
                  </div>

                  <div className={styles.educationHeader}>
                    <div className={styles.educationTitle}>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <h5 className={styles.institution}>
                        <a 
                          href={edu.institutionUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.institutionLink}
                        >
                          {edu.institution}
                          <span className={styles.externalLinkIcon}>🔗</span>
                        </a>
                      </h5>
                    </div>
                    <div className={styles.educationMeta}>
                      <span className={styles.duration}>{edu.duration}</span>
                      <span className={styles.status}>{edu.status}</span>
                      <span className={styles.gpa}>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <div className={styles.educationDetails}>
                    <div className={styles.coursework}>
                      <h6>Relevant Coursework:</h6>
                      <div className={styles.courseList}>
                        {edu.relevantCoursework.map((course, idx) => (
                          <span key={idx} className={styles.courseTag}>{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.activities}>
                      <h6>Activities & Involvement:</h6>
                      <ul>
                        {edu.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;