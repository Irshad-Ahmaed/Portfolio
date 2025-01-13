import { propel, aichef, hero } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postman,
    docker,
    threeJS,
    chatty
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Nextjs",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threeJS,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud",
    },
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Propel Mentorship",
        icon: propel,
        iconBg: "#000",
        date: "June 2024 - Sep 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with designers, product managers, and other developers to create high-quality products.",
            "Built and test API endpoints with the postman, express and Node.js",
            "Reduce the time by 30% for API call.",
            "Build the Mongoose schema to manage data efficiently.",
            "Used GridFS in Mongoose to store data larger than 16MB.",
            "Containerize the whole product with Docker.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "AI Chef Master",
        icon: aichef,
        iconBg: "#000",
        date: "Oct 2024 - Nov 2024",
        points: [
            "Enhanced data storage architecture, improving efficiency by 50% for seamless data retrieval and frontend integration.",
            "Refined the Dish Overview UI to display comprehensive dish details effectively and added share functionality.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Irshad-Ahmaed',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/irshad-profile',
    }
];

export const projects = [
    {
        iconUrl: chatty,
        theme: 'btn-back-black',
        name: 'Chatty Chatter',
        description: `Utilized the MERN stack (MongoDB, Express.js, React, Node.js), Zustand for state management, Tailwind CSS for styling, and Socket.io for real-time communication. Continuously upgrading and enhancing the application to improve performance and add new features.`,
        link: 'https://chat-app-mern-uvxz.onrender.com',
    },
    {
        iconUrl: hero,
        theme: 'btn-back-blue',
        name: 'AI Short Video Generator',
        description: "Utilized Gemini AI for prompt generation, Google Cloud for text-to-speech conversion, and Remotion for video synthesis.",
        link: 'https://ir-ai-short-vid-gen.vercel.app',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Stack Overflow Clone',
        description: 'Developed a Stack Overflow clone, It’s a complete project with frontend and backend integrated, uses redux for state management, best uses of React hooks, reusable code, proper schema for the backend, and good folder structure.',
        link: 'https://stack-overflow-clone-web.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Flip The Coin',
        description: "This is my basic Web3 project: you have to bid some amount to start this game. If you get your predicted outcome then you get double the amount of bedding, but if you lose, you won't lose anything.",
        link: 'https://irshad-coin-flip-game.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'E-commerce Shoe Shop',
        description: 'This is my E-commerce project hosted on an AWS EC2 instance,  It contains user-friendly UI, easy-to-use features, an authentication system, a Stripe payment gateway, order status, an order tracking system, a user can give reviews, chatbot for queries.  ',
        link: 'https://drive.google.com/file/d/11X9788LyjaPkoLA1ilXu--LF7xuqY5nA/view?usp=drive_link',
    }
];