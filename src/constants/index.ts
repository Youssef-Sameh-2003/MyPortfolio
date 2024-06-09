// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  wordpress,
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
  starbucks,
  stsmart,
  aast,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Courses",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "VB.NET Developer",
    icon: mobile,
  },
  {
    title: "C# Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Wordpress",
    icon: wordpress
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web Development With PHP",
    company_name: "Arab Academy For Science, Technology and Maritime",
    icon: aast,
    iconBg: "#383E56",
    date: "June 2019 - August 2019",
    points: [
      "HTML",
      "CSS",
      "jQuery",
      "PHP",
      "MySQL + XAMPP",
      "Wordpress",
      "Other CMS & LMS (Joomla, OpenCart, Moodle LMS)"
    ],
  },
  {
    title: "Robotics Level 1",
    company_name: "SMART Technology",
    icon: stsmart,
    iconBg: "#E6DEDD",
    date: "Feb 2023",
    points: [
      "Learning Basics of Robotics & Arduino",
      "I made simple projects like Moving The robot , voice recognition, Ultrasonic Sensor",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Tawasul (Website)",
    description:
      "A social Network Platform, but still under development (many bugs may be found)",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Youssef-Sameh-2003/Tawasul",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Anonvid (Website)",
    description:
      "Free Anonymous Video Sharing Platform",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Youssef-Sameh-2003/AnonVid",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "soilFTP",
    description:
      "A simple FTP Client for everyone needs",
    tags: [
      {
        name: "VB.NET",
        color: "blue-text-gradient",
      },
    ],
    image: project3,
    live_site_link: "https://youssefsamehf.gumroad.com/l/soilFTP",
  },
  {
    name: "soilCapture",
    description:
      "A Screen Recorder for Capturing what you do in your computer",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
    ],
    image: project4,
    live_site_link: "https://youssefsamehf.gumroad.com/l/soilcapture?_gl=1*10mcjax*_ga*MTk5MTI1MTQ0Ni4xNzE2NjU5NjQ1*_ga_6LJN6D94N6*MTcxNzk1MjYxNy4xMC4xLjE3MTc5NTI3MTQuMC4wLjA.",
  },
  {
    name: "WiFi Master Pro",
    description:
      "See who is connecting on your wifi, and stop them by ARP Spoofing",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    live_site_link: "https://youssefsamehf.gumroad.com/l/wifi-master-pro",
  },
  {
    name: "HayatGPT (AI Telegram Bot)",
    description:
        "HayatGPT is an ai telegram bot based on API",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: project6,
    live_site_link: "https://t.me/hayatgpt_ai_img_bot",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@ReaperZephyr",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/youssef-sameh-0646a9286/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Buz1J%2B0c8RcWzSHA1NO%2Fj%2Fw%3D%3D",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/YusufSameh2003",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Youssef-Sameh-2003",
  },
] as const;
