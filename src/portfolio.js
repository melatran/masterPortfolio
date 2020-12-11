const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Melanie Tran",
  logo_name: "Melanie Tran",
  nickname: "Software Engineer",
  subTitle:
    "My developer vision is to create inclusive projects in the field of Tony Starks for my diverse community",
  resumeLink:
    "https://www.canva.com/design/DAEPzGf5geM/RO5Wm30Qngvz4K2svRnunA/view?utm_content=DAEPzGf5geM&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  portfolio_repository: "https://github.com/melatran",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/melatran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/melanietran1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:melaniexx02@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Built out internal APIs and consuming external APIs",
        "⚡ Collaborate with Frontend developers to build out apps",
        "⚡ Test driven development and debugging",
        "⚡ Experience working with PostgreSQL and MongoDB",
        "⚡ Create application backend using Ruby on Rails, Node, Express, Django",
        "⚡ Experience interacting with Firebase service",
        "⚡ Worked in Ruby, JavaScript, Typescript, and Python",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Basic Frontend Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built fullstack websites in Ruby on Rails",
        "⚡ Knowledge of HTML, CSS, and Bootstrap",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Vanilla JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Turing School of Software and Design",
      subtitle: "Backend Engineering Certificate",
      logo_path: "turing.png",
      duration: "2020",
      descriptions: [
        "⚡ Full time 7 month program coding over 60 hours a week",
        "⚡ Built out fullstack apps and APIs in Ruby on Rails",
        "⚡ Knowledge in JavaScript, Python, Django, Node, and Express",
        "⚡ Created a project that won 3rd place at Demo Comp",
        "⚡ Completed the program 100% remote",
      ],
    },
    {
      title: "University of Colorado at Denver",
      subtitle: "Bachelor of Science in Biology, Minor in Criminal Justice",
      logo_path: "cudenver.png",
      duration: "2016",
      descriptions: [
        "⚡ Completed the required courses in pre-medicine route",
        "⚡ For my minor, I focused on criminal justice reform in prison",
        "⚡ Took additional studies on child psychology and advocated against child abuse",
        "⚡ Volunteered at the trauma center at Sweedish Medical Center",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TEFL",
      subtitle: "2016",
      logo_path: "ita.jpg",
      certificate_link: "",
      alt_name: "ITEFL",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Career Journey",
  description:
    "This is not a traditional career path to becoming a software developer. I graduated college with the intent to pursue medical school but found a passion to educate and mentor students before discovering a passion in coding and software development.",
  header_image_path: "work.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Software Engineer (Contract Position)",
          company: "FinGoal",
          company_url: "https://www.fingoal.com/",
          logo_path: "fingoal.jpg",
          duration: "October 2020 - PRESENT",
          location: "Remote",
          description:
            "Prior to this role, I had to quickly learn TypeScript, JavaScript, Express, and Node. I worked on our location microservice to enhance information about a user's location by returning a list of nearby zip codes. I worked on creating the connection between our location microservice to our automation service to create automated financial advice for our users. Currently, I am working on a dispatch workflow system for the FinGoal team.",
          color: "#0879bf",
        },
        {
          title: "English Teacher",
          company: "Galiano Island English Academy",
          company_url: "http://www.galianoislandeec.com/",
          logo_path: "gisland.png",
          duration: "August 2018 - August 2019",
          location: "Iksan, South Korea",
          description:
            "I created lesson plans and assignments catered towards students ranging from kindergarten to middle school. My primary responsibilities were to improve students' comphrehension, pronunciation, and grammar with the English language. I worked with other teachers to discuss strategy and improve the curriculum.",
          color: "#9b1578",
        },
        {
          title: "Algebra and Geometry Teacher",
          company: "ACE Community Challenge Charter School",
          logo_path: "dps.jpg",
          duration: "October 2016 - June 2018",
          location: "Denver, CO",
          description:
            "ACE was a school for high risk students who have been kicked out of traditional schools and focused on earning credits to reenroll to motivate students to graduate. I created the math curriculum for 8th garde to 10th grade students and designed IEP plans for students with learning disabilities. I also mentored students and prepped them for job interviews and motivated them to graduate high school.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Turing+ Fellow",
          company: "Turing School of Software and Design",
          logo_path: "turing.png",
          duration: "October 2020 - January 2021",
          location: "Denver, CO",
          description:
            "I was accepted at Turing to complete my fellowship after graduating. I worked on implementing new features at the company I am doing my fellowship with and continued learning new frameworks, languages, and technologies.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteer",
      experiences: [
        {
          title: "Meal Pal",
          company: "Swedish Medical Center",
          logo_path: "swedish.png",
          duration: "January 2015 - January 2016",
          location: "Englewood, CO",
          description:
            "I volunteered in the Trauma department helping nurses with lunch meals for patients in the hospital. I helped patients who were unable to feed themselves and provide company during their stay.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects incorporate a variety of languages, frameworks, and technologies to continue my learning and growth. The majority of the projects were completed 100% remote because I started learning how to code during the Pandemic of 2020. I have also linked apps that I have contributed code for.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "momo.png",
    description:
      "Through my experience teaching my students and watching them struggle to navigate a machine that was not designed with them in mind, I strive to create inclusive products that account for multiple stories and promote the importance of diversity. Feel free to reach out to me and let's connect and make a difference today!",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {},
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
