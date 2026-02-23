export const HERO_CONTENT =
    "test";

export const ABOUT_TEXT = "Hello! My name is Trieu Fu-Khai, and I am a Computer Science student at the OTH Regensburg.\n" +
    "\n" +
    "Throughout my studies and personal drive, I have developed a strong foundation in programming languages such as Java, C , Python and C#. My technical expertise spans across building backends with modern frameworks, as well as developing responsive frontends using HTML, CSS, and JavaScript. I am also proficient in managing data and infrastructure using SQL and PL/SQL.\n" +
    "\n"+
    "I gained valuable practical experience during my time at BMW, working in the software development department. There, I specialized in Oracle APEX and PL/SQL to deliver internal software solutions and utilized QlikSense for incident report analysis.\n" +
    "\n" +
    "I am always eager to take on new challenges and continue expanding my skills in the field of software engineering.";

export const EXPERIENCES = [
  {
    year: "07/2024 - 12/2024",
    role: "Intern Agile Software Development & Business Intelligence",
    company: "BMW AG, Regensburg",
    description:
        "Contributed to the agile development and support of web-based applications (Takt News, Schulungsbuchung, Taktboard) using Oracle APEX. Implemented full-stack features using SQL, PL/SQL, and modern web technologies. Developed a custom Business Intelligence solution from scratch using QlikSense for incident report analysis and participated in all agile ceremonies including Dailies and Sprint Reviews.",
    technologies: ["Oracle APEX", "SQL / PL-SQL", "QlikSense", "JavaScript", "Jira"],
  },
  {
    year: "07/2017 - 07/2017",
    role: "Intern",
    company: "Kindergarten Heising",
    description: `1 week internship in a kindergarden`,
    technologies: ["Kindergarden"],
  },
  {
    year: "07/2018 - 07/2018",
    role: "Intern",
    company: "Krones AG",
    description: `1 week internship in electrical engineering`,
    technologies: ["Eletrical engineering"],
  },

];

export const PROJECTS = [
  {
    title: "Placemark App",
    description:
        "Developed a comprehensive full-stack application for discovering and managing points of interest. The app allows users to document locations with photos and visualize them on an interactive map. Key features include a global search functionality, real-time weather integration, and adding photos to the specific point. The application is fully deployed using Netlify and Render.",
    technologies: ["Svelte", "Hapi.js", "Fullstack", "Map API", "Weather API" ,"Netlify", "Render"],
  },
  {
    title: "HowTo",
    description:
        "A full-stack health-tech platform developed as a collaborative project at OTH Regensburg. The application enables users to share and monetize health-related video content with a virtual currency system. Built for scalability and security, the project features a Spring-based backend with Thymeleaf for dynamic templating, Docker containerization, and advanced authentication (OAuth 2.0 & Email-based 2FA).",
    technologies: ["Spring Boot", "Thymeleaf", "Docker", "Java", "OAuth 2.0", "Health-Tech"],
  },
  {
    title: "KWH-Coin",
    description:
        "A custom blockchain implementation developed as a collaborative group project at OTH Regensburg. The application features a decentralized ledger where users can manage digital wallets, transfer coins, and participate in network security through a Proof-of-Work (PoW) mining algorithm. The system includes automated block validation, chain integrity checks, and a reward mechanism for miners to simulate a real-world cryptocurrency ecosystem.",
    technologies: ["Python", "Blockchain", "Proof-of-Work", "Cryptography", "Consensus Algorithms"],
  },
  {
    title: "Weather App Website",
    description:
        "Designed and developed a weather app website where users can register, log in, and add weather stations to a personalized dashboard, with the stations displayed on an interactive map, providing real-time weather updates.",
    technologies: ["Node.js", "Bootstrap", "Postgresql", "Handlebars", "Javascript"],
  },
  {
    title: "Responsive Web Design",
    description:
        "A simple html that is responsive through css",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Portfolio Website Development",
    description:
        "Developed a dynamic and responsive portfolio website using React.",
    technologies: ["React", "Tailwindcss", "Framer Motion"],
  },

];

export const CONTACT = {
  email: "trieufukhai@gmail.com",
};
