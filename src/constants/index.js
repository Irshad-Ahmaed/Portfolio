import { propel } from "../assets/images";
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
    threeJS
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
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
        imageUrl: postman,
        name: "Postman",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud",
    },
    {
        imageUrl: threeJS,
        name: "Three.js",
        type: "Frontend",
    }
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
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Built and test API endpoints with the postman, express and Node.js",
            "Reduce the time by 30% for API calling.",
            "Build the Mongoose schema to manage data efficiently.",
            "Used GridFS in Mongoose to store data larger than 16MB.",
            "Containerize the whole product with Docker.",
        ],
    },
    // {
    //     title: "Full Stack Developer",
    //     company_name: "Business Web Solution",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        link: 'https://www.linkedin.com/in/irshad-ahmad-63497924a/',
    }
];

export const projects = [
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