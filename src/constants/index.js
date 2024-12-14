import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import blog from "../assets/projects/BlogProject.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with technologies, such as Vue.js, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Aliter Business Solutions Pvt Ltd",
    description: `Worked on CRM project modules, contributing to both frontend and backend development and 
    Developed RESTful APIs using Node.js to efficiently fetch and manage data from MongoDB.Built dynamic and user-friendly interfaces using Vue.js as the frontend framework.
    Collaborated with cross-functional teams to ensure seamless integration between frontend and backend components and Optimized API performance and ensured data integrity across modules.
    Gained hands-on experience in implementing features that improved client workflow and usability.`,
    technologies: ["Javascript", "Node.js", "Vue.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Blog Web App",
    image: blog,
    description:
      "Developed a web application that allows users to upload and manage posts seamlessly. The application includes robust features for user authentication and data handling" + 
      "Designed and implemented RESTful APIs to fetch and store data efficiently.Utilized MongoDB to securely store user data and application content.Implemented login and logout functionality using browser local storage to manage user sessions.",
    technologies: ["Javascript", "React.js", "Node.js","REST API","HTML", "CSS", "MongoDB"],
  },
  // {
  //   title: "Hotel Booking App",
  //   image: project2,
  //   description:
  //     " It is a simple application where a user can review the restaurants and add the restaurants as well as delete and update .The application is build using React, Node, Express and PostgreSql for the database. Uses REST API to get and store data of restaurants and reviews.",
  //   technologies: ["Javascript", "React.js", "Node.js","REST API","HTML", "CSS", "MongoDB"],
  // },
  {
    title: " Basic Yelp(Restaurants) Clone",
    image: project3,
    description:
      " It is a simple application where a user can review the restaurants and add the restaurants as well as delete and update .The application is build using React, Node, Express and PostgreSql for the database. Uses REST API to get and store data of restaurants and reviews.",
    technologies: ["Javascript", "React.js", "Node.js","HTML", "CSS", "MongoDB","PostgreSql","Bootstrap"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Hajimalang Road ,Nandivali, Kalyan(E),Thane-421306",
  phoneNo: "+91 7447863411",
  email: "rahulghatge166@gmail.com",
};
