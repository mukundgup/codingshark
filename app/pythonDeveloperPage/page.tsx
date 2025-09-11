"use client";

import { useState, useRef } from "react";
import Header from "../(site)/_components/Header";
import Footer from "../(site)/_components/Footer";

export default function PythonCourseDetails() {
    const [activeModule, setActiveModule] = useState(0);
    const headerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle mouse move effect in the header
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const header = headerRef.current;
        if (!header) return;

        const rect = (header as HTMLDivElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6 mt-2 text-gray-800 bg-white">

                <div
                    ref={headerRef}
                    onMouseMove={handleMouseMove}
                    className="relative text-center p-20 md:p-32 rounded-2xl mb-16 overflow-hidden bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-xl transition-all duration-300"
                >
                    <div className="relative z-10">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Professional Certification
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
                            Python Developer Course
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Master Python programming and build real-world applications with industry best practices
                        </p>
                        <button className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                            Enroll Now
                        </button>
                    </div>

                    {/* Floating Elements */}
                    <div
                        className="absolute w-72 h-72 bg-white rounded-full opacity-15 top-[-80px] right-[-80px]"
                        style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
                    ></div>
                    <div
                        className="absolute w-48 h-48 bg-white rounded-full opacity-15 bottom-[-40px] left-[-40px]"
                        style={{ transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)` }}
                    ></div>
                    <div
                        className="absolute w-40 h-40 bg-white rounded-full opacity-15 top-1/2 left-1/4"
                        style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
                    ></div>

                    {/* Python Icon */}
                    <div
                        className="absolute w-40 h-40 md:w-48 md:h-48 right-10 bottom-0 opacity-80"
                        style={{
                            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(${mousePosition.x * 0.01}deg)`,
                        }}
                    >
                        <svg viewBox="0 0 128 128">
                            <linearGradient
                                id="python-original-a"
                                gradientUnits="userSpaceOnUse"
                                x1="70.252"
                                y1="1237.476"
                                x2="170.659"
                                y2="1151.089"
                                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                            >
                                <stop offset="0" stopColor="#5A9FD4" />
                                <stop offset="1" stopColor="#306998" />
                            </linearGradient>
                            <linearGradient
                                id="python-original-b"
                                gradientUnits="userSpaceOnUse"
                                x1="209.474"
                                y1="1098.811"
                                x2="173.62"
                                y2="1149.537"
                                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                            >
                                <stop offset="0" stopColor="#FFD43B" />
                                <stop offset="1" stopColor="#FFE873" />
                            </linearGradient>
                            <path
                                fill="url(#python-original-a)"
                                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                                transform="translate(0 10.26)"
                            />
                            <path
                                fill="url(#python-original-b)"
                                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                                transform="translate(0 10.26)"
                            />
                        </svg>
                    </div>
                </div>

                {/* What You Will Learn */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 relative after:block after:w-20 after:h-1 after:bg-orange-400 after:mx-auto after:mt-3">
                        What You Will Learn
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-3 transition border-b-4 border-transparent hover:border-orange-400">
                            <div className="text-5xl mb-6">🐍</div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Python Fundamentals</h3>
                            <p>Master core Python concepts, data structures, and object-oriented programming</p>
                        </div>
                        <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-3 transition border-b-4 border-transparent hover:border-orange-400">
                            <div className="text-5xl mb-6">🔍</div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Data Analysis</h3>
                            <p>Learn data manipulation with NumPy, Pandas, and visualization with Matplotlib</p>
                        </div>
                        <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-3 transition border-b-4 border-transparent hover:border-orange-400">
                            <div className="text-5xl mb-6">🤖</div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Machine Learning</h3>
                            <p>Build intelligent systems with scikit-learn, TensorFlow, and PyTorch</p>
                        </div>
                        <div className="bg-white shadow-md rounded-2xl p-8 hover:-translate-y-3 transition border-b-4 border-transparent hover:border-orange-400">
                            <div className="text-5xl mb-6">🌐</div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Web Development</h3>
                            <p>Create web applications with Django and Flask frameworks</p>
                        </div>
                    </div>
                </section>

                {/* Course Modules */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 relative after:block after:w-20 after:h-1 after:bg-orange-400 after:mx-auto after:mt-3">
                        Course Modules
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gray-100">
                            {modules.map((module, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveModule(index)}
                                    className={`cursor-pointer p-6 border-b hover:bg-gray-200 transition ${activeModule === index ? "bg-orange-400 text-white relative" : ""
                                        }`}
                                >
                                    <h3 className="font-semibold text-lg">{module.title}</h3>
                                    <span className="text-sm opacity-80">{module.duration}</span>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-2 p-8">
                            <h3 className="text-2xl font-bold text-orange-500 mb-2">
                                {modules[activeModule].title}
                            </h3>
                            <p className="text-sm opacity-70 mb-4">{modules[activeModule].duration}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {modules[activeModule].topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

// Modules Data
const modules = [
    {
        title: "Module 1: Python Fundamentals",
        duration: "3 weeks",
        topics: [
            "Setting up your Python development environment",
            "Python syntax, variables, and data types",
            "Control flow: conditionals and loops",
            "Functions and modules",
            "Error handling and debugging",
            "Working with files and directories",
        ],
    },
    {
        title: "Module 2: Data Structures & Algorithms",
        duration: "4 weeks",
        topics: [
            "Lists, tuples, sets, and dictionaries",
            "Comprehensions and generators",
            "Object-oriented programming in Python",
            "Algorithm design and analysis",
            "Recursion and dynamic programming",
            "Sorting and searching algorithms",
        ],
    },
    {
        title: "Module 3: Data Analysis & Visualization",
        duration: "4 weeks",
        topics: [
            "Introduction to NumPy for numerical computing",
            "Data manipulation with Pandas",
            "Data visualization with Matplotlib and Seaborn",
            "Statistical analysis in Python",
            "Working with different data formats (CSV, JSON, Excel)",
            "Data cleaning and preprocessing techniques",
        ],
    },
    {
        title: "Module 4: Web Development with Python",
        duration: "5 weeks",
        topics: [
            "Web development fundamentals (HTML, CSS, JavaScript)",
            "Building web applications with Flask",
            "Creating robust web applications with Django",
            "RESTful API development",
            "Database integration (SQL and NoSQL)",
            "Authentication and authorization",
            "Deployment and scaling",
        ],
    },
    {
        title: "Module 5: Machine Learning with Python",
        duration: "6 weeks",
        topics: [
            "Introduction to machine learning concepts",
            "Supervised learning algorithms",
            "Unsupervised learning algorithms",
            "Feature engineering and selection",
            "Model evaluation and hyperparameter tuning",
            "Natural language processing",
            "Computer vision basics",
            "Introduction to deep learning with TensorFlow and PyTorch",
        ],
    },
    {
        title: "Module 6: Capstone Project",
        duration: "4 weeks",
        topics: [
            "Project planning and requirements gathering",
            "System design and architecture",
            "Implementation using Python and relevant frameworks",
            "Testing and quality assurance",
            "Deployment to production",
            "Documentation and presentation",
            "Code review and feedback",
        ],
    },
];
