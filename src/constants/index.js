import {
  mobile,
  backend,
  frontend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mcgraw,
  redcross,
  threejs,
  cryptoapp,
  gamersonly,
  nbaapp,
  fullerton,
  ucr,
  hoopvisionai,
  budgetfy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Content Programmer",
    company_name: "McGraw Hill",
    icon: mcgraw,
    iconBg: "#E6DEDD",
    date: "September 2022 - July 2023",
    points: [
      "Designed and developed different online textbook problems that are releasing with the new McGraw Hill Chemistry and Math textbooks using ISL (similar to HTML) and Javascript.",
      "Fixed past problems from older editions of the textbooks that are currently being used in schools.",
      "Updated documentation on ISL (in-house programming language) on new bugs/fixes and more optimal ways to use the code",
    ],
  },
  {
    title: "Part-Time Office Assistant",
    company_name: "Children & Adult Medical Group",
    icon: redcross,
    iconBg: "#E6DEDD",
    date: "January 2015 - Present",
    points: [
      "Fixing general IT problems in the office like Bluetooth connection with printers, internet shortages, recovering deleted files, and helping people log in.",
      "Converting physical patient folders to a new online system which helps reduce paper use.",
      "Entering data for new patients and pre-authorized doctor's notes.",
    ],
  },
];

const education = [
  {
    school: "University of California Riverside",
    year: "September 2020 - June 2022",
    degree: "Bachelor of Science",
    major: "- Computer Science",
    image: ucr,
  },
  {
    school: "California State University Fullerton",
    year: "August 2018 - May 2020",
    degree: "",
    major: "Computer Science",
    image: fullerton,
  },
];

const projects = [
  {
    name: "HoopVisionAI",
    description:
      "AI Image Detection application used to identify visual stats for any uploaded NBA basketball video.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Ultralytics / OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: hoopvisionai,
    source_code_link: "https://hoopvision.onrender.com/",
    github_link: "https://github.com/steven-nguyen22/Image-Detection",
  },
  {
    name: "Budgetfy",
    description:
      "MERN-stack web application for users to track their finances and graphically display them throughout the year.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Docker / AWS",
        color: "pink-text-gradient",
      },
    ],
    image: budgetfy,
    source_code_link: "https://stevens-budgetfy.onrender.com/",
    github_link: "https://github.com/steven-nguyen22/Money-Tracker",
  },
  {
    name: "Crypto Tracker",
    description:
      "Web application that allows users to search and track Cryptocurrencies and view their current/past histories.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoapp,
    source_code_link: "https://stevens-crypto-tracker.netlify.app/",
    github_link: "https://github.com/steven-nguyen22/Crypto-Tracker",
  },
  {
    name: "GamersOnly",
    description:
      "Online social platform that enables gamers to match and live chat with other similar gamers according to their set preferences.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: gamersonly,
    source_code_link:
      "https://github.com/CS-UCR/senior-design-project-lesalsa-james",
    github_link:
      "https://github.com/CS-UCR/senior-design-project-lesalsa-james",
  },
  {
    name: "NBA Analytics",
    description:
      "Web application that performs high-level analytics on an NBA dataset while allowing users to modify/add new data.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: nbaapp,
    source_code_link: "https://github.com/steven-nguyen22/nbaAnalyticsProject",
    github_link: "https://github.com/steven-nguyen22/nbaAnalyticsProject",
  },
];

export { services, technologies, experiences, projects, education };
