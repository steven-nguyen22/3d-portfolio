import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  mcgraw,
  redcross,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cryptoapp,
  gamersonly,
  nbaapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
  },
  {
    name: "GamersOnly",
    description:
      "Web-based platform that enables gamers to match and live chat with other similar gamers according to their set preferences.",
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
  },
];

export { services, technologies, experiences, testimonials, projects };
