import bruceMarsImg from "../img/bruce-mars.jpg";
import businessContactImg from "../img/businessContact.jpg";

const profilesData = [
  // Business Profiles
  {
    username: "michael-roven",
    name: "Michael Roven",
    profileImg: bruceMarsImg,
    role: "Business",
    category: "Tech Company",
    projects: [
      {
        title: "Rover raised $65 million",
        description:
          "Finding temporary housing for your dog should be as easy as renting an Airbnb.",
        img: businessContactImg,
      },
      {
        title: "Tech Innovators Funded",
        description: "Securing investment for groundbreaking tech startups.",
        img: businessContactImg,
      },
      {
        title: "Green Initiatives",
        description:
          "Supporting eco-friendly businesses and sustainable practices.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/mohammed-salah12",
      linkedin: "https://linkedin.com/in/username",
      email: "mailto:email@example.com",
    },
    about:
      "Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous.",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Git",
      "Bootstrap",
      "Tailwind",
      "Critical Thinking",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Agile Methodologies",
      "API Development",
      "Project Management",
      "UI/UX Design",
    ],
  },
  {
    username: "emily-jones",
    name: "Emily Jones",
    profileImg: bruceMarsImg,
    role: "Business",
    category: "Healthcare Company",
    projects: [
      {
        title: "Tech Startups Boosted",
        description:
          "Elevating tech startups through strategic partnerships and investment.",
        img: businessContactImg,
      },
      {
        title: "HealthTech Ventures",
        description: "Promoting innovations in healthcare technology.",
        img: businessContactImg,
      },
      {
        title: "Educational Outreach",
        description:
          "Supporting educational initiatives and e-learning platforms.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/emily-jones",
      linkedin: "https://linkedin.com/in/emily-jones",
      email: "mailto:emily.jones@example.com",
    },
    about:
      "Passionate about leveraging technology to solve real-world problems and drive innovation across various sectors.",
    skills: [
      "Innovation Management",
      "Technology Strategy",
      "Business Development",
      "E-learning Solutions",
      "Healthcare Innovations",
      "Startup Mentoring",
      "Financial Planning",
      "Market Analysis",
      "Strategic Partnerships",
      "Investment Strategies",
      "Leadership",
      "Project Coordination",
      "Cross-functional Collaboration",
      "Product Development",
      "Public Speaking",
      "Networking",
      "Customer Insights",
      "Growth Hacking",
      "Business Analytics",
    ],
  },
  {
    username: "john-doe",
    name: "John Doe",
    profileImg: bruceMarsImg,
    role: "Business",
    category: "Nonprofit Organization",
    projects: [
      {
        title: "Health Awareness Campaign",
        description:
          "Running campaigns to raise awareness about health and wellness.",
        img: businessContactImg,
      },
      {
        title: "Youth Mentorship Program",
        description:
          "Providing mentorship and guidance to young people in the community.",
        img: businessContactImg,
      },
      {
        title: "Environmental Conservation",
        description:
          "Engaging in projects aimed at preserving natural habitats and ecosystems.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/john-doe",
      linkedin: "https://linkedin.com/in/john-doe",
      email: "mailto:john.doe@example.com",
    },
    about:
      "Passionate about making a difference in the world through nonprofit work and committed to driving positive change in various sectors.",
    skills: [
      "Nonprofit Management",
      "Community Engagement",
      "Campaign Management",
      "Youth Mentoring",
      "Environmental Advocacy",
      "Public Relations",
      "Event Organization",
      "Volunteer Coordination",
      "Strategic Planning",
      "Fundraising",
      "Public Speaking",
      "Team Leadership",
      "Grant Writing",
      "Collaboration",
      "Project Management",
      "Social Media Strategy",
      "Networking",
      "Program Development",
      "Advocacy",
    ],
  },
  // Volunteer Profiles
  {
    username: "john-volunteer",
    name: "John Volunteer",
    profileImg: bruceMarsImg,
    role: "Volunteer",
    category: "Web Developer",
    projects: [
      {
        title: "Community Website",
        description:
          "Developed a website for local community events and resources.",
        img: businessContactImg,
      },
      {
        title: "Nonprofit Portal",
        description:
          "Created a portal for managing nonprofit activities and volunteer sign-ups.",
        img: businessContactImg,
      },
      {
        title: "Educational Platform",
        description:
          "Built an online learning platform for educational institutions.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/john-volunteer",
      linkedin: "https://linkedin.com/in/john-volunteer",
      email: "mailto:john.volunteer@example.com",
    },
    about:
      "Dedicated web developer passionate about building web applications that improve user experience and solve real-world problems.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Bootstrap",
      "Problem Solving",
    ],
  },
  {
    username: "jane-devops",
    name: "Jane DevOps",
    profileImg: bruceMarsImg,
    role: "Volunteer",
    category: "DevOps Engineer",
    projects: [
      {
        title: "CI/CD Pipeline Automation",
        description:
          "Automated CI/CD pipelines for improved deployment efficiency.",
        img: businessContactImg,
      },
      {
        title: "Infrastructure as Code",
        description:
          "Implemented infrastructure as code using Terraform for scalability.",
        img: businessContactImg,
      },
      {
        title: "Monitoring Dashboard",
        description:
          "Developed a monitoring dashboard to track system performance and alerts.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/jane-devops",
      linkedin: "https://linkedin.com/in/jane-devops",
      email: "mailto:jane.devops@example.com",
    },
    about:
      "Experienced DevOps engineer with a strong background in automating infrastructure and improving CI/CD pipelines.",
    skills: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Ansible",
      "Linux",
      "Python",
      "Shell Scripting",
      "Monitoring",
    ],
  },
  {
    username: "alice-designer",
    name: "Alice Designer",
    profileImg: bruceMarsImg,
    role: "Volunteer",
    category: "UI/UX Designer",
    projects: [
      {
        title: "User Research Study",
        description:
          "Conducted user research to improve the user experience for a major app.",
        img: businessContactImg,
      },
      {
        title: "Redesign for E-commerce Site",
        description:
          "Redesigned the UI/UX for an e-commerce platform to boost user engagement.",
        img: businessContactImg,
      },
      {
        title: "Prototype for Mobile App",
        description:
          "Developed interactive prototypes for a new mobile application.",
        img: businessContactImg,
      },
    ],
    socialLinks: {
      github: "https://github.com/alice-designer",
      linkedin: "https://linkedin.com/in/alice-designer",
      email: "mailto:alice.designer@example.com",
    },
    about:
      "Creative UI/UX designer with a passion for creating visually appealing and user-friendly designs.",
    skills: [
      "Adobe XD",
      "Figma",
      "Sketch",
      "Wireframing",
      "Prototyping",
      "User Research",
      "UI Design",
      "UX Design",
      "Responsive Design",
      "User Testing",
    ],
  },
];

export default profilesData;
