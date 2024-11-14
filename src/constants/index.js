import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.avif";

export const ABOUTME_CONTENT = `I'm a passionate full-stack developer with a passion for building dynamic and scalable web applications that make a real impact. Skilled in both front-end tools like React and Next.js and back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, I’m driven by the challenge of crafting solutions that blend performance with seamless user experiences. My aim is to leverage these skills to drive business innovation and create value through technology.`;

export const EXPERIENCES = {
  role: "Full Stack Developer (Intern)",
  company: "NULLCLASS PVT LIMITED",
  description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. 
    Worked closely with backend developers to integrate frontend components with Node.js APIs. 
    Implemented responsive designs and optimized frontend performance. 
    Designed and implemented RESTful APIs for data communication  and integrated with MongoDB databases.`,
  technologies: ["HTML", "CSS", "Javascript", "React.js", "Node.js", "MongoDB"],
};

export const PROJECTS = [
  {
    title: "OverflowHub",
    image: project1,
    description:
      "A community-driven platform for posting and answering tech-related queries, allowing users to filter results based on specific tech stacks, fostering collaboration and knowledge-sharing.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/balajisiv03/OverflowHub",
  },
  {
    title: "HavenEstate",
    image: project2,
    description:
      "A real estate platform that helps users find properties for rent and sale. Features include advanced search options, sorting by price range, and property details like number of bedrooms and parking spaces.",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "MySQL"],
    link: "https://github.com/balajisiv03/HEstate",
  },

  {
    title: "TrackWave",
    image: project3,
    description:
      "An application designed to track student attendance, offering features such as automatic time logging, attendance reporting, and integration with database systems to ensure seamless data storage and retrieval.",
    technologies: ["NextJs", "TailwindCSS", "DrizzleORM", "PostgreSQL"],
    link: "https://github.com/balajisiv03/TrackWave",
  },

  {
    title: "PresenceIQ",
    image: project4,
    description:
      "A data analytics dashboard for HR departments to track employee attendance, with insights into patterns, absences, and overall performance, enabling better decision-making and resource planning.",
    technologies: ["Power BI", "SQL", "DAX", "Excel"],
    link: "https://github.com/balajisiv03/PresenceIQ",
  },
];
