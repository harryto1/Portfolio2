import React, { useState, useEffect, useRef } from 'react';
import styles from './css/Skills.module.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      description: "Building beautiful, responsive user interfaces",
      skills: [
        { name: "React", level: 90, icon: "⚛️", description: "Component-based UI library" },
        { name: "TypeScript", level: 85, icon: "📘", description: "Type-safe JavaScript" },
        { name: "HTML/CSS", level: 95, icon: "🌐", description: "Web fundamentals & styling" },
        { name: "JavaScript", level: 75, icon: "⚡", description: "Dynamic web programming" },
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      description: "Server-side logic and database management",
      skills: [
        { name: "Flask", level: 80, icon: "🐍", description: "Python web framework" },
        { name: "PostgreSQL", level: 70, icon: "🐘", description: "Relational database management" },
        { name: "REST APIs", level: 75, icon: "🔗", description: "Web service development" },
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      description: "Development tools and workflows",
      skills: [
        { name: "Git", level: 90, icon: "📚", description: "Version control system" },
        { name: "Firebase", level: 80, icon: "🔥", description: "Backend-as-a-Service platform" },
        { name: "Docker", level: 65, icon: "🐳", description: "Containerization platform" },
        { name: "VS Code", level: 95, icon: "💻", description: "Code editor & IDE" },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={skillsRef} id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <p className={styles.sectionSubtitle}>
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className={`${styles.skillCategory} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
              </div>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className={styles.skillItem}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={styles.skillHeader}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <div className={styles.skillDetails}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillDescription}>{skill.description}</span>
                        </div>
                      </div>
                      <div className={styles.skillLevel}>
                        <span className={styles.skillPercentage}>{skill.level}%</span>
                        <div className={styles.skillRating}>
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`${styles.star} ${i < Math.ceil(skill.level / 20) ? styles.filled : ''}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.skillBar}>
                      <div 
                        className={`${styles.skillProgress} ${isVisible ? styles.animate : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className={styles.skillGlow}></div>
                      </div>
                    </div>
                    
                    {hoveredSkill === skill.name && (
                      <div className={styles.skillTooltip}>
                        <div className={styles.tooltipContent}>
                          <strong>{skill.name}</strong>
                          <p>{skill.description}</p>
                          <div className={styles.proficiencyLevel}>
                            Proficiency: <span className={styles.levelIndicator}>{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;