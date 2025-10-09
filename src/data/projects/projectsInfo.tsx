import faeBanner from "../../assets/faeBanner.png";
import atabeiImg1 from "../../assets/atabei_img_3.png";
import atabeiImg2 from "../../assets/atabei_img_2.png";
import atabeiImg3 from "../../assets/atabei_img_1.png";
import atabeiBanner from "../../assets/atabei_banner.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  imageUrl: string;
  imagePaths?: string[];
  technologies: string[];
  frameworks: string[];
  languages: string[];
  liveUrl: string;
  githubUrl: string;
  startDate: string;
  developmentTime: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

const projectsInfo: Project[] = [
    {
        id: 1,
        title: "Fórmula al Éxito Tutoring Platform",
        description: "A full-stack tutoring platform with user authentication, a live chat, videocalls, whiteboards, and many more features.",
        detailedDescription: [
          `A comprehensive tutoring solution built with modern web technologies. The platform includes user authentication, live chat, video calls, interactive whiteboards, recordings, learning materials, and a robust admin dashboard. It is designed to facilitate seamless communication and collaboration between tutors and students, providing a rich set of features to enhance the learning experience.`,
          `The backend is powered by Flask, ensuring a secure and efficient server-side experience, while the frontend is built with static templates along with Jinja and Javascript, providing a dynamic and responsive user interface. The backend uses SQLAlchemy and PostgreSQL for database management, ensuring data integrity and security.`,
          `It is designed so that students can easily find and book tutoring sessions without having to log in, this is done using cookies and session management. Also, tutors can create and manage their profiles, schedules, and sessions.`
        ],
        imageUrl: faeBanner,
        technologies: ["Flask", "HTML", "CSS", "JavaScript"],
        frameworks: ["Flask"],
        languages: ["Python", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://www.formulaalexito.com",
        githubUrl: "",
        startDate: "January 2025",
        developmentTime: "6 months",
        features: [
            "User authentication and authorization",
            "Real-time chat and video conferencing",
            "Interactive whiteboard with drawing tools",
            "Session recordings and playback",
            "Resource library for learning materials",
            "Admin dashboard for managing users and content",
            "Responsive design for mobile and desktop"
        ],
        challenges: [
            "Integrating real-time video and chat functionality",
            "Designing a user-friendly interface",
            "Ensuring data security and privacy",
            "Working with complex database relationships"
        ],
        learnings: [
            "Advanced Flask development",
            "Hosting and deployment strategies",
            "Socket programming with Flask-SocketIO",
            "Database management with SQLAlchemy and PostgreSQL",
        ]
    },
    {
        id: 2,
        title: "Atabei Mobile App",
        description: "A social media app built with Flutter, Bloc, Dart, and Firebase, inspired by Twitter. Includes timeline, posts, likes, notifications, profiles, and user search.",
        detailedDescription: [
          "Twitter-like social media application developed using Flutter, Bloc, Dart, and Firebase. It allows users to create and interact with posts in real-time, follow other users, and stay updated through a personalized timeline. The app integrates multiple Firebase services for authentication, real-time updates, and push notifications.",
          "The design follows a modern, minimal style similar to Twitter, focusing on clean navigation and smooth user interactions across both Android and iOS.",
          "This project is currently not finished and I will continue development soon. This project was developed as part of a learning experience to deepen understanding of Flutter and Firebase, and is not intended for production use."
        ],
        imageUrl: atabeiBanner,
        technologies: ["Flutter","Bloc", "Dart", "Firebase"],
        frameworks: ["Flutter", "Bloc"],
        languages: ["Dart"],
        liveUrl: "",
        githubUrl: "https://github.com/harryto1/atabei.git",
        startDate: "May 2025",
        developmentTime: "2 months",
        imagePaths: [
            atabeiImg1,
            atabeiImg2,
            atabeiImg3,
        ],
        features: [
            "User authentication with Firebase Auth",
            "Timeline Feed",
            "Post creation and editing",
            "Real-Time Updates with Firestore",
            "User Profiles",
            "Notification System",
            "Cross-Platform Support (iOS & Android)"
        ],
        challenges: [
            "Implementing real-time data synchronization",
            "Designing a responsive UI for multiple screen sizes",
            "Managing state with Bloc",
            "Integrating push notifications with Firebase Cloud Messaging"
        ],
        learnings: [
            "Flutter clean app architecture and best practices",
            "Using Bloc for effective state management",
            "Firebase integration and services",
            "Cross-platform mobile development"
        ]
    },
];

export default projectsInfo;