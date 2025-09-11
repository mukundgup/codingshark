"use client";

import { useState, useRef } from "react";

export default function MERNStackCourseDetails() {
  const [activeModule, setActiveModule] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move effect in the header
  const handleMouseMove = (e: React.MouseEvent) => {
    const header = headerRef.current;
    if (!header) return;

    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* HEADER */}
      <div
        ref={headerRef}
        onMouseMove={handleMouseMove}
        className="relative text-center py-20 rounded-2xl mb-16 overflow-hidden shadow-xl bg-gradient-to-r from-sky-400 to-purple-600 text-white transition-all duration-300"
      >
        <div className="relative z-10">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur">
            Professional Certification
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            MERN Stack Developer Course
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed">
            Master full-stack JavaScript development and build modern web
            applications with industry best practices
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            Enroll Now
          </button>
        </div>

        {/* Decorative Circles */}
        <div
          className="absolute w-72 h-72 rounded-full bg-white/20 top-[-100px] right-[-100px] opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full bg-white/20 bottom-[-50px] left-[-50px] opacity-20"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
          }}
        />
        <div
          className="absolute w-36 h-36 rounded-full bg-white/20 top-1/2 left-1/4 opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${
              mousePosition.y * 0.03
            }px)`,
          }}
        />
      </div>

      {/* WHAT YOU LEARN */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-3 after:content-[''] after:absolute after:w-20 after:h-1 after:bg-sky-400 after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          What You Will Learn
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "⚛️",
              title: "Frontend Development",
              text: "Master React.js, modern JavaScript (ES6+), state management, and responsive UI design",
            },
            {
              icon: "🛢️",
              title: "Database Management",
              text: "Learn MongoDB schema design, aggregation pipelines, and data modeling best practices",
            },
            {
              icon: "🔌",
              title: "Backend Development",
              text: "Build robust APIs with Node.js, Express, authentication, and authorization systems",
            },
            {
              icon: "🚀",
              title: "Deployment & DevOps",
              text: "Master CI/CD, containerization with Docker, and cloud deployment on AWS and Heroku",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-b-4 border-transparent hover:border-sky-400 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW YOU LEARN */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-3 after:content-[''] after:absolute after:w-20 after:h-1 after:bg-sky-400 after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          How You Will Learn
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Interactive Coding",
              text: "Practice MERN stack development in our interactive coding environment with real-time feedback and guidance.",
            },
            {
              title: "Project-Based Learning",
              text: "Apply your knowledge by building real-world full-stack applications and showcase your skills.",
            },
            {
              title: "Mentorship",
              text: "Get personalized guidance from industry professionals who will review your code and accelerate your growth.",
            },
            {
              title: "Community Learning",
              text: "Collaborate on projects, participate in code reviews, and network with peers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md relative overflow-hidden hover:shadow-xl transition"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-sky-400" />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-3 after:content-[''] after:absolute after:w-20 after:h-1 after:bg-sky-400 after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Course Modules
        </h2>
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Module List */}
          <div className="bg-gray-100">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(index)}
                className={`p-5 border-b cursor-pointer transition ${
                  activeModule === index
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <h3 className="font-semibold">{module.title}</h3>
                <span className="text-sm opacity-80">
                  {module.duration}
                </span>
              </div>
            ))}
          </div>

          {/* Module Details */}
          <div className="p-6 col-span-2">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              {modules[activeModule].title}
            </h3>
            <p className="text-gray-500 mb-4">
              {modules[activeModule].duration}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {modules[activeModule].topics.map((topic, i) => (
                <li key={i} className="text-gray-700">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-3 after:content-[''] after:absolute after:w-20 after:h-1 after:bg-sky-400 after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Student Success Stories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              text: "This MERN stack course transformed my career. I went from knowing basic JavaScript to landing a job as a full-stack developer in just 6 months.",
              name: "Jennifer S.",
              role: "Full-Stack Developer at TechCorp",
              avatar: "JS",
            },
            {
              text: "The project-based approach helped me build a portfolio that impressed employers. I created a complete e-commerce platform during the course.",
              name: "Michael R.",
              role: "MERN Developer at InnovateSoft",
              avatar: "MR",
            },
            {
              text: "I was able to modernize our company's legacy system after just the first few modules. By the end, I had completely rebuilt our app using the MERN stack.",
              name: "Alex T.",
              role: "Lead Engineer at AppWorks",
              avatar: "AT",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6 relative">
                <span className="absolute top-2 left-4 text-6xl text-sky-400 opacity-20">
                  “
                </span>
                <p className="relative z-10 text-gray-700 leading-relaxed">
                  {t.text}
                </p>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Course module data
const modules = [
  {
    title: "Module 1: JavaScript Fundamentals",
    duration: "3 weeks",
    topics: [
      "Modern JavaScript (ES6+) concepts",
      "Asynchronous JavaScript with Promises and async/await",
      "Functional programming concepts",
      "Arrow functions, destructuring, and spread/rest operators",
      "Error handling and debugging",
      "Working with local storage and browser APIs",
    ],
  },
  {
    title: "Module 2: React.js Frontend Development",
    duration: "4 weeks",
    topics: [
      "React components and JSX syntax",
      "State management with hooks and Context API",
      "Routing with React Router",
      "Form handling and validation",
      "Performance optimization techniques",
      "Testing React applications with Jest and React Testing Library",
    ],
  },
  {
    title: "Module 3: MongoDB & Database Design",
    duration: "3 weeks",
    topics: [
      "NoSQL database concepts and MongoDB setup",
      "CRUD operations in MongoDB",
      "Schema design and data modeling",
      "Indexing and query optimization",
      "MongoDB Atlas and cloud deployment",
      "Aggregation pipelines and advanced queries",
    ],
  },
  {
    title: "Module 4: Node.js & Express Backend",
    duration: "4 weeks",
    topics: [
      "Node.js architecture and core modules",
      "Building RESTful APIs with Express",
      "Authentication and authorization with JWT",
      "Middleware development and implementation",
      "Error handling and logging",
      "API security best practices",
      "Real-time communication with Socket.io",
    ],
  },
  {
    title: "Module 5: Full-Stack Integration",
    duration: "4 weeks",
    topics: [
      "Connecting React frontend with Express API",
      "State management with Redux or Redux Toolkit",
      "HTTP requests with Axios or Fetch API",
      "File uploads and media handling",
      "Payment gateway integration",
      "User authentication flows",
      "Performance optimization across the stack",
    ],
  },
  {
    title: "Module 6: Deployment & DevOps",
    duration: "2 weeks",
    topics: [
      "CI/CD pipeline setup with GitHub Actions",
      "Containerization with Docker",
      "Cloud deployment with AWS, Heroku, or Vercel",
      "Environment configuration and security",
      "Monitoring and logging in production",
      "Performance testing and optimization",
      "Scaling MERN applications",
    ],
  },
  {
    title: "Module 7: Capstone Project",
    duration: "6 weeks",
    topics: [
      "Planning and requirements gathering",
      "System architecture design",
      "Full-stack implementation with MERN",
      "Testing and quality assurance",
      "Deployment to production",
      "Documentation and presentation",
      "Code review and feedback",
    ],
  },
];
