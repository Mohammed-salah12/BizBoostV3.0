import defaultProfileImg from "../img/Funder.jpeg"; // Use a default image for all profiles

const profilesData = [
  {
    username: "michael-roven",
    name: "Michael Roven",
    profileImg: defaultProfileImg,
    role: "Business",
    category: "Tech Company",
    skills: ["Technology", "Investment", "Project Management"],
    about:
      "Michael Roven is a leading figure in the tech industry with a focus on innovative solutions and investment opportunities.",
    projects: [
      {
        title: "Rover raised $65 million",
        description:
          "Finding temporary housing for your dog should be as easy as renting an Airbnb.",
        img: defaultProfileImg,
      },
      {
        title: "Tech Innovators Funded",
        description: "Securing investment for groundbreaking tech startups.",
        img: defaultProfileImg,
      },
      {
        title: "Green Initiatives",
        description:
          "Supporting eco-friendly businesses and sustainable practices.",
        img: defaultProfileImg,
      },
    ],
    campaign: {
      title: "Rover raised $65 million",
      description:
        "Find temporary housing for your dog should be as easy as renting an Airbnb.",
      goal: 50000,
      supporters: 250,
      img: defaultProfileImg,
      comments: [
        {
          name: "John Doe",
          photo: defaultProfileImg,
          message: "This is an amazing campaign! Great job!",
          date: "2024-07-31",
        },
        {
          name: "Jane Smith",
          photo: defaultProfileImg,
          message: "Impressive work! Keep it up!",
          date: "2024-07-30",
        },
      ],
      about:
        "This is a detailed description of the company behind the campaign.",
    },
  },
  {
    username: "susan-kelly",
    name: "Susan Kelly",
    profileImg: defaultProfileImg,
    role: "Business",
    category: "Social Impact",
    skills: ["Community Development", "Health Initiatives", "Fundraising"],
    about:
      "Susan Kelly focuses on social impact initiatives aimed at improving community health and education.",
    projects: [
      {
        title: "Community Health Initiative",
        description:
          "Investing in projects that improve community health and well-being.",
        img: defaultProfileImg,
      },
      {
        title: "Education for All",
        description:
          "Supporting educational programs and resources for underprivileged communities.",
        img: defaultProfileImg,
      },
    ],
    campaign: {
      title: "Community Health Initiative",
      description:
        "Investing in projects that improve community health and well-being.",
      goal: 80000,
      supporters: 500,
      img: defaultProfileImg,
      comments: [
        {
          name: "Alice Johnson",
          photo: defaultProfileImg,
          message: "This initiative is very important! Proud to support!",
          date: "2024-07-29",
        },
        {
          name: "Robert Brown",
          photo: defaultProfileImg,
          message: "Great cause! Looking forward to seeing the impact.",
          date: "2024-07-28",
        },
      ],
      about:
        "Our goal is to invest in projects that have a positive impact on community health.",
    },
  },
  {
    username: "john-smith",
    name: "John Smith",
    profileImg: defaultProfileImg,
    role: "Volunteer",
    category: "Education",
    skills: ["Education", "Tech Training", "Community Engagement"],
    about:
      "John Smith is dedicated to providing tech education and community support to underserved youth.",
    projects: [
      {
        title: "Tech Education for Youth",
        description:
          "Providing tech education and resources to underprivileged youth.",
        img: defaultProfileImg,
      },
      {
        title: "Clean Water Access",
        description: "Ensuring access to clean water in underserved regions.",
        img: defaultProfileImg,
      },
    ],
    campaign: {
      title: "Tech Education for Youth",
      description:
        "Providing tech education and resources to underprivileged youth.",
      goal: 60000,
      supporters: 300,
      img: defaultProfileImg,
      comments: [
        {
          name: "Emily Davis",
          photo: defaultProfileImg,
          message:
            "This project is crucial for future generations. Happy to help!",
          date: "2024-07-27",
        },
        {
          name: "Michael Johnson",
          photo: defaultProfileImg,
          message: "Education is the key to a better future. Great initiative!",
          date: "2024-07-26",
        },
      ],
      about:
        "We aim to bridge the tech education gap and empower youth through learning.",
    },
  },
  {
    username: "lisa-williams",
    name: "Lisa Williams",
    profileImg: defaultProfileImg,
    role: "Volunteer",
    category: "Environmental",
    skills: ["Environmental Advocacy", "Sustainability", "Urban Planning"],
    about:
      "Lisa Williams works on promoting environmental sustainability and improving urban green spaces.",
    projects: [
      {
        title: "Green Earth Projects",
        description:
          "Promoting sustainable practices and environmental awareness.",
        img: defaultProfileImg,
      },
      {
        title: "Urban Green Spaces",
        description:
          "Developing green spaces in urban areas to improve quality of life.",
        img: defaultProfileImg,
      },
    ],
    campaign: {
      title: "Urban Green Spaces",
      description:
        "Developing green spaces in urban areas to improve quality of life.",
      goal: 75000,
      supporters: 400,
      img: defaultProfileImg,
      comments: [
        {
          name: "Sara Parker",
          photo: defaultProfileImg,
          message:
            "Love the focus on urban green spaces! Excited to contribute.",
          date: "2024-07-25",
        },
        {
          name: "Paul Wilson",
          photo: defaultProfileImg,
          message: "This project will make our cities more livable. Well done!",
          date: "2024-07-24",
        },
      ],
      about:
        "Our mission is to enhance urban environments by creating green spaces for communities.",
    },
  },
  {
    username: "david-jones",
    name: "David Jones",
    profileImg: defaultProfileImg,
    role: "Business",
    category: "Healthcare",
    skills: ["Healthcare Management", "Mental Health", "Community Outreach"],
    about:
      "David Jones is committed to improving healthcare access and mental health services.",
    projects: [
      {
        title: "Affordable Health Clinics",
        description:
          "Establishing clinics that offer affordable healthcare services.",
        img: defaultProfileImg,
      },
      {
        title: "Mental Health Awareness",
        description:
          "Promoting mental health awareness and providing support services.",
        img: defaultProfileImg,
      },
    ],
    campaign: {
      title: "Affordable Health Clinics",
      description:
        "Establishing clinics that offer affordable healthcare services.",
      goal: 90000,
      supporters: 350,
      img: defaultProfileImg,
      comments: [
        {
          name: "James Lee",
          photo: defaultProfileImg,
          message: "Health access should be universal. Proud to support!",
          date: "2024-07-23",
        },
        {
          name: "Nancy Wilson",
          photo: defaultProfileImg,
          message: "This campaign is vital for improving healthcare access.",
          date: "2024-07-22",
        },
      ],
      about: "We focus on making healthcare accessible and affordable for all.",
    },
  },
];

export default profilesData;
