const projects = [
  {
    id: 1,
    title: "GoFood",
    slug: "gofood",
    description:
      "GoFood is a full-stack MERN food ordering platform designed to simulate a real-world online food delivery system. The application supports secure JWT-based authentication with role-based access for users and admins. Users can browse restaurants, explore menus, add items to a cart, place orders, and view their complete order history. The backend is built with Node.js and Express.js, exposing RESTful APIs optimized for performance and scalability, while MongoDB handles data persistence. The frontend is developed using React with a responsive UI powered by Bootstrap, ensuring smooth usability across devices. The platform was tested with 100+ users, focusing on efficient API responses, clean UI flows, and maintainable code architecture.",
    techstack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "JWT",
    ],
    github: "https://github.com/KushagraJain02/GoFood-Frontend",
    live: "https://go-food-frontend-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Doctor Appointment App",
    slug: "doctor-appointment-app",
    description:
      "This Doctor Appointment Application is a full-stack system built to streamline the process of booking and managing medical appointments. It features secure JWT-based authentication and separate dashboards for admins and users. Patients can register, log in, browse doctors, and book appointments, while admins can manage doctors, appointments, and users efficiently. The backend consists of well-structured REST APIs built with Node.js and Express.js, handling over 500 test bookings with sub-200ms response times. MongoDB is used for storing appointment, user, and doctor data, ensuring flexibility and scalability. The frontend is developed using React and Context API for state management, providing a clean, intuitive, and responsive user experience.",
    techstack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Context API",
      "JWT",
    ],
    github: "https://github.com/KushagraJain02/doctorapp_frontend",
    live: "https://doctorapp-frontend-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    slug: "amazon-clone",
    description:
      "The Amazon Clone is a frontend-focused project aimed at replicating the core user interface and experience of a modern e-commerce platform. It includes product listings, detailed product cards, a shopping cart flow, and a fully responsive layout that adapts seamlessly across screen sizes. Built using React, JavaScript, and CSS, the project emphasizes component reusability, clean UI design, and smooth user interactions. This project demonstrates strong frontend fundamentals, including layout structuring, styling, and state-driven UI updates, making it a solid showcase of practical React skills.",
    techstack: ["React", "CSS", "JavaScript"],
    github: "https://github.com/KushagraJain02/amazon-clone",
    live: "https://kushagrajain02.github.io/amazon-clone/",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    slug: "tic-tac-toe",
    description:
      "Tic Tac Toe is an interactive browser-based game built using React, focusing on clean UI design and efficient state management. The game supports real-time turn updates, winner detection, and game resets, all handled through optimized React state logic. The interface is lightweight, responsive, and user-friendly, making it suitable for both desktop and mobile users. This project highlights core React concepts such as component-driven architecture, state handling, and conditional rendering, while also emphasizing code clarity and simplicity.",
    techstack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/KushagraJain02/Tic_Tac_Toe",
    live: "https://kushagrajain02.github.io/Tic_Tac_Toe/",
  },
  {
    id: 5,
    title: "Currency Converter",
    slug: "currency-converter",
    description:
      "The Currency Converter is a real-time web application that allows users to convert between multiple currencies using live exchange rate APIs. Built with React and JavaScript, the application fetches up-to-date currency data from external APIs and performs fast, accurate conversions. The UI is designed to be intuitive and minimal, enabling users to quickly select currencies and view conversion results. This project demonstrates effective API integration, asynchronous data handling, and responsive UI design, along with a strong focus on user experience and performance.",
    techstack: ["React", "JavaScript", "API"],
    github: "https://github.com/KushagraJain02/Currency_converter",
    live: "https://kushagrajain02.github.io/Currency_converter/",
  },
  {
    id: 6,
    title: "Crypto Tracker",
    slug: "crypto-tracker",
    description:
      "Crypto Tracker is a frontend application that provides real-time cryptocurrency prices, market trends, and historical data. Users can search for coins, view detailed price charts, and track their favorite cryptocurrencies. The app is built using React and integrates with a third-party crypto API to fetch live market data. Responsive design ensures smooth usability across devices, while clear visualization emphasizes performance and usability.",
    techstack: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/KushagraJain02/crypto",
    live: "https://kushagrajain02.github.io/crypto/",
  },
  {
    id: 7,
    title: "E-commerce Website",
    slug: "e-commerce-website",
    description:
      "This E-commerce Website is a frontend-focused project that simulates a modern online shopping experience. It features product browsing, detailed product pages, a shopping cart, and a checkout flow. Built with React, CSS, and JavaScript, the project emphasizes responsive design, component reusability, and smooth interactions. The application demonstrates strong frontend skills including layout structuring, state management, and API integration for product data.",
    techstack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/KushagraJain02/E_Commerce_Website",
    live: null,
  },
];

export const fetchAllProjects = () => {
  return projects;
};

export const fetchProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};
