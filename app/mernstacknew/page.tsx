"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import bgImage from "../../public/pythonimage/pthonbg.png";
import pradeep from "../../public/images/newpradeepsirCopy.jpg";
import pradeepsir from "../../public/images/newpradeepsirCopy.jpg";
import Students from "../../public/pythonimage/Students.svg";
import WorkingProfessionals from "../../public/pythonimage/WorkingProfessionals.svg";
import job from "../../public/pythonimage/job.svg";
// import Header from "../(site)/_components/Header";
// import Footer from "../(site)/_components/Footer";
// import genrate from '../../public/pythonimage/generate.png'
// import Manage from '../../public/pythonimage/managedata.png'
// import Debug from '../../public/pythonimage/debug.png'
// import Analyze from '../../public/pythonimage/analyze.png'
// import Automate from '../../public/pythonimage/automate.png'
// import Become from '../../public/pythonimage/become.png'
// import naukri from '../../public/pythonimage/naukri.webp'
// import linkedin from '../../public/pythonimage/Linkedin.webp'
// import Glassdoor from '../../public/pythonimage/Glassdoor.webp'
// import Indeed from '../../public/pythonimage/Indeed.webp'
export default function Python() {
    const [selected, setSelected] = useState<number[]>([]);
    const toggleSelect = (index: number) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    const items = [
        "I want to master full-stack web development with the MERN stack.",
        "I need to learn how to build scalable web applications using MongoDB, Express, React and Node.js.",
        "I want to understand how to create RESTful APIs and handle client-server communication.",
        "I'm looking to build modern, responsive user interfaces with React and manage complex state.",
        "I need to learn database design and management with MongoDB for web applications.",
        "I aim to become a professional full-stack developer and advance my career in web development.",
    ];

    const mentors = [
        {
            id: 2,
            name: "Pradeep Patidar",
            image: pradeep,
            credentials: [
                "IIT Kharagpur Alumni",
                "Trained more than 2,10,000 working professionals in MERN Stack development",
                "TEDx and G20 Speaker"
            ],
            description: "Hi, I am Pradeep Patidar and I will be your mentor for the upcoming MERN Stack Development cohort.",
            experience: "I graduated from IIT Kharagpur and have been in the educational industry for several years now. As a teacher, I was fortunate enough to secure the highest package (INR 1.5 cr) in India.",
            additionalInfo: "I too have built multiple eight-figure companies using MERN Stack technologies, and I am super excited to share all my knowledge and experience with you to help you become a proficient full-stack developer.",
            workshop: "Join me in this workshop specifically for tech professionals and let's take the first step towards mastering MERN Stack development together."
        }
    ];
    const [openFAQ, setOpenFAQ] = useState('start');
    const toggleFAQ = (faqId: string) => {
        setOpenFAQ(openFAQ === faqId ? '' : faqId);
    };
    const faqData = [
        {
            id: 'start',
            question: 'When will the MERN Stack cohort start?',
            answer: 'The MERN Stack using AI cohort will start today. The live mega webinar will be hosted this Sunday (August 31, 2025 11:00 AM).'
        },
        {
            id: 'prerequisite',
            question: 'Do I need prior experience with MERN Stack?',
            answer: 'No prior experience needed! We start from the basics of MongoDB, Express.js, React.js and Node.js. The course is designed for both beginners and intermediate developers.'
        },
        {
            id: 'certified',
            question: 'Will I get a MERN Stack certification?',
            answer: 'Yes! You will receive an industry-recognized certification in MERN Stack development upon completing the course and projects.'
        },
        {
            id: 'notes',
            question: 'What learning materials are provided?',
            answer: 'You\'ll get comprehensive notes covering MongoDB, Express, React and Node.js, along with practical assignments, code samples, and project templates.'
        },
        {
            id: 'technologies',
            question: 'Which technologies will be covered?',
            answer: 'We cover the complete MERN stack: MongoDB for database, Express.js for backend, React.js for frontend, and Node.js for server-side development. Plus modern tools like Redux, JWT authentication, and REST APIs.'
        },
        {
            id: 'projects',
            question: 'Will there be practical projects?',
            answer: 'Yes! You\'ll build multiple full-stack applications including a social media app, e-commerce platform, and real-time chat application using the MERN stack.'
        },
        {
            id: 'job',
            question: 'Will this help me get a job?',
            answer: 'Absolutely! MERN Stack developers are in high demand. We\'ll help you build a portfolio of projects and prepare you for technical interviews.'
        },
        {
            id: 'payment',
            question: 'I made the payment but didn\'t receive any email',
            answer: 'Please write to us at hello@aifortechies.in & our awesome support team will get back to you as soon as possible.'
        }
    ];
    return (
        <>

            <div
                className="relative min-h-screen flex flex-col items-center justify-center  bg-center p-6"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/80" />

                {/* Content */}
                <div className="relative z-10 max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        "BECOME A <span className="text-orange-600">MERN STACK  PRO</span> IN JUST
                        <span className="text-orange-600"> 30 DAYS WITH AI</span>"
                    </h1>
                    <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                        Level up your MERN Stack development skills with our intensive 6 month is AI cohort. Master MongoDB, Express.js, React.js and Node.js while learning directly from industry experts. Build real-world full-stack applications and gain the confidence to become a job-ready MERN Stack developer in just one month!
                    </p>

                    {/* Card */}
                    <div className="bg-orange-100 rounded-2xl p-6 md:p-10 text-white shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Left Side - Image */}
                            <div className="bg-white rounded-2xl p-4">
                                <Image
                                    src={pradeepsir}
                                    alt="MERN STACK  Course"
                                    width={300}
                                    height={200}
                                    className="rounded-xl object-cover mx-auto"
                                />
                                <div className="text-black font-semibold mt-2">
                                    Pradeep Patidar <br /> IIT Kharagpur & Senior Data
                                    Analyst
                                </div>
                            </div>

                            {/* Right Side - Info */}
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <span className="bg-white text-black p-2 rounded-lg text-sm font-medium">
                                        ✔ 25 Lessons With Case Studies
                                    </span>
                                    <span className="bg-white text-black p-2 rounded-lg text-sm font-medium">
                                        ✔ Mega Webinar on 31/08/2025
                                    </span>
                                    <span className="bg-white text-black p-2 rounded-lg text-sm font-medium">
                                        ✔ Get Certificate Of Completion
                                    </span>
                                    <span className="bg-white text-black p-2 rounded-lg text-sm font-medium">
                                        ✔ No prior knowledge of MERN STACK  or AI required
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="text-yellow-400 font-bold text-lg">
                                    ⭐ 4.87/5 (18,365 reviews) 71,365 students
                                </div>

                                {/* CTA */}
                                <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                                    <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                                        <span className="relative z-10">
                                            Register For Master Class
                                        </span>
                                        {/* Shine effect */}
                                        <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* secound section */}
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
                    <div className="relative z-10 max-w-6xl w-full text-center bg-transparent">
                        {/* Instructors Section */}
                        <div className="flex justify-center mb-10 bg-transparent">
                            {/* Instructor 2 */}
                            <div className="backdrop-blur-md rounded-2xl border-2 p-6 relative max-w-md" style={{ boxShadow: '5px 5px 0px 2px rgba(247, 189, 102, 0.77)' }}>
                                <div className="absolute bottom-[-8px] right-[-8px] w-full h-full rounded-2xl -z-10"></div>
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={pradeep}
                                        alt="Aditya Kachave"
                                        width={150}
                                        height={150}
                                        className="rounded-full object-cover"
                                    />
                                    <h3 className="text-lg font-bold">INSTRUCTOR</h3>
                                    <p className="text-gray-800 font-semibold">pradeep patidar</p>
                                    <p className="text-gray-600 text-sm">
                                        IIT Kharagpur Alumnus | Trained 2,10,000+ students in AI | Certified AI Trainer | TEDx & G20 Speaker
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="grid md:grid-cols-2 gap-6 text-left mb-10 bg-transparent">
                            <ul className="space-y-4 text-lg text-gray-800">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Master MongoDB database operations and queries
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Build REST APIs with Express and Node.js
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Create dynamic user interfaces with React
                                </li>
                            </ul>


                            <ul className="space-y-4 text-lg text-gray-800">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Implement user authentication and authorization
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Deploy full-stack applications to production
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Build real-world projects from scratch
                                </li>
                            </ul>
                        </div>


                        {/* CTA Button */}
                        <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                            <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                                <span className="relative z-10">
                                    Register For Master Class
                                </span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="relative min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
                <div className="max-w-6xl w-full text-center">
                    <h2 className="text-3xl font-bold mb-2">What is covered in cohort?</h2>
                    <p className="text-gray-600 mb-8">Starts from 31/08/2025</p>


                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Week 1 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 1</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Introduction to MongoDB</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">CRUD Operations</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">MongoDB Queries</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Database Design</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Indexing</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Aggregation Pipeline</span>
                            </div>
                        </div>


                        {/* Week 2 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 2</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Express.js Basics</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Routing & Middleware</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">REST API Development</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Error Handling</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Authentication</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">API Security</span>
                            </div>
                        </div>


                        {/* Week 3 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 3</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">React Fundamentals</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Components & Props</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">State Management</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Hooks</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Redux & Context API</span>
                            </div>
                        </div>


                        {/* Week 4 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 4</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Node.js Fundamentals</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Server-side Logic</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Database Integration</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Full Stack Development</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Deployment</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Performance Optimization</span>
                            </div>
                        </div>


                        {/* Final Project */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Final Project</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">E-commerce Platform</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Social Media App</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Real-time Chat App</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Portfolio Website</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">and more...</span>
                            </div>
                        </div>


                        {/* Note Section */}
                        <div className="bg-red-50 rounded-2xl p-6 text-center shadow-md flex items-center justify-center">
                            <p className="text-gray-700 font-medium">
                                The cohort is designed for everyone who wants to become a full-stack developer using the MERN stack and build modern web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 4 */}

            <div className="py-16 px-6 bg-transparent">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    What our students were able to achieve after completing the cohort?
                </h2>

                {/* Boxes */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                    {items.map((text, i) => (
                        <div
                            key={i}
                            onClick={() => toggleSelect(i)}
                            className={`flex items-start p-4 rounded-xl shadow-md cursor-pointer transition border ${selected.includes(i)
                                ? "bg-blue-50 border-blue-500"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selected.includes(i)}
                                onChange={() => toggleSelect(i)}
                                className="mt-1 mr-3 h-5 w-5 accent-blue-500 cursor-pointer"
                            />
                            <p className="text-gray-700 text-sm md:text-base">{text}</p>
                        </div>
                    ))}
                </div>

                {/* Invite Text */}
                <p className="text-center text-gray-700 mb-6">
                    If you checked ANY of the boxes above, then you're invited to join the
                    <a
                        href="#"
                        className="text-blue-600 underline ml-1 hover:text-blue-800"
                    >
                        MERN Stack Development Cohort
                    </a>
                    .
                </p>


                {/* CTA Button */}
                <div className="text-center">
                    <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                        <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                            <span className="relative z-10">
                                Register For Master Class
                            </span>
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                            </span>
                        </button>
                    </a>
                    <p className="mt-4 font-bold text-gray-900">
                        Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                    </p>
                </div>
            </div>
            {/* section 5 */}


            {/* section 6 */}


            {/* section 7 */}
            <section className="py-16 bg-white text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-12">What is this program for?</h2>
                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div>
                        <Image
                            src={Students}
                            alt="Students"
                            width={250}
                            height={250}
                            className="mx-auto"
                        />
                        <p className="mt-4 text-xl font-medium">Students</p>
                    </div>

                    {/* Card 2 */}
                    <div>
                        <Image
                            src={WorkingProfessionals}
                            alt="Working Professionals"
                            width={250}
                            height={250}
                            className="mx-auto"
                        />
                        <p className="mt-4 text-xl font-medium">Working Professionals</p>
                    </div>

                    {/* Card 3 */}
                    <div>
                        <Image
                            src={job}
                            alt="Job Seekers"
                            width={250}
                            height={250}
                            className="mx-auto"
                        />
                        <p className="mt-4 text-xl font-medium">Job Seekers</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                        <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                            <span className="relative z-10">
                                Register For Master Class
                            </span>
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                            </span>
                        </button>
                    </a>
                </div>

                {/* Register Notice */}
                <p className="mt-6 text-lg font-bold">
                    Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                </p>
            </section>

            {/* section 8 */}
            <section className="relative bg-blue-50 py-16 text-center">
                {/* Top Wave */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-bold mb-4">Did You Know?</h2>
                <p className="text-lg max-w-3xl mx-auto mb-12">
                    By mastering the MERN stack, you can transform your career from basic web development to building modern, scalable full-stack applications that are in high demand across tech companies worldwide.
                </p>

                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">4 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Junior MERN Stack Developer
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-blue-500 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">8 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Mid-level MERN Stack Developer
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 border-green-600 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">15 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Senior MERN Stack Developer with expertise in modern frameworks
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                        <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group">
                            <span className="relative z-10">
                                Register For Master Class
                            </span>
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                            </span>
                        </button>
                    </a>
                </div>

                {/* Register Notice */}
                <p className="mt-6 text-lg font-bold">
                    Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                </p>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* section 9 */}
            <section className="py-16 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-12">
                    BONUSES WORTH RS. 12300 for First 50 Registrations{" "}
                    <span className="text-red-600">(Slots Remaining 18)</span>
                </h2>

                {/* Bonus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Bonus 1 */}
                    <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-2xl shadow-md p-6 relative">
                        <span className="absolute -top-4 left-4 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-md">
                            Bonus 1
                        </span>
                        <h3 className="text-3xl font-bold mt-4">₹ 4,500</h3>
                        <p className="mt-2 text-lg">2 Capstone Projects to add on your Resume</p>
                    </div>

                    {/* Bonus 2 */}
                    <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-2xl shadow-md p-6 relative">
                        <span className="absolute -top-4 left-4 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-md">
                            Bonus 2
                        </span>
                        <h3 className="text-3xl font-bold mt-4">₹ 3,500</h3>
                        <p className="mt-2 text-lg">
                            20+ resume templates to get you shortlisted
                        </p>
                    </div>

                    {/* Bonus 3 */}
                    <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-2xl shadow-md p-6 relative">
                        <span className="absolute -top-4 left-4 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-md">
                            Bonus 3
                        </span>
                        <h3 className="text-3xl font-bold mt-4">₹ 4,300</h3>
                        <p className="mt-2 text-lg">
                            10+ Website Templates to Create your own portfolio
                        </p>
                    </div>
                </div>

                {/* Timer Section */}
                <h3 className="text-2xl font-bold mb-2">TIME IS RUNNING OUT.</h3>
                <h3 className="text-2xl font-bold mb-6">GRAB YOUR SPOT FAST</h3>
                <p className="mb-6 text-gray-600">
                    Grab the bonuses worth Rs.12300 inside the Cohort!
                </p>

                <div className="flex justify-center gap-6 mb-6">
                    <div className="bg-black text-white rounded-lg px-8 py-6 min-w-[150px]">
                        <p className="text-4xl font-bold text-blue-400">00</p>
                        <p className="text-lg">Minutes</p>
                    </div>
                    <div className="bg-black text-white rounded-lg px-8 py-6 min-w-[150px]">
                        <p className="text-4xl font-bold text-blue-400">00</p>
                        <p className="text-lg">Seconds</p>
                    </div>
                </div>

                <p className="text-gray-700 mb-8">Limited Seats Only at Rs. 199/-</p>

                {/* CTA Button */}
                <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                    <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                        <span className="relative z-10">
                            Register For Master Class
                        </span>
                        {/* Shine effect */}
                        <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                        </span>
                    </button>
                </a>
            </section>

            {/* section 9 */}
            <div className="max-w-6xl mx-auto px-4 py-12 ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet your Mentors
                    </h2>
                </div>

                {/* Mentors Grid */}
                <div className="space-y-16">
                    {mentors.map((mentor, index) => (
                        <div
                            key={mentor.id}
                            className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Section */}
                            <div className="flex-shrink-0">
                                <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-teal-600 shadow-2xl">
                                    {/* Replace with actual Image component when you have real images */}
                                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-teal-600 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">
                                                {mentor.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Uncomment when you have actual images */}
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-center mt-6 text-gray-900">
                                    {mentor.name}
                                </h3>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 space-y-6">
                                {/* Credentials */}
                                <div className="space-y-3">
                                    {mentor.credentials.map((credential, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">
                                                {credential}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{mentor.description}</p>
                                    <p>{mentor.experience}</p>
                                    {mentor.additionalInfo && <p>{mentor.additionalInfo}</p>}
                                    {mentor.workshop && <p>{mentor.workshop}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 space-y-4">
                    <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                        <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                            <span className="relative z-10">
                                Register For Master Class
                            </span>
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                            </span>
                        </button>
                    </a>
                    <p className="text-gray-600 text-sm">
                        Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                    </p>
                </div>
            </div>

            {/* section 10 */}
            <div className="min-h-screen bg-blue-50 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions (FAQs)
                        </h1>
                        <p className="text-gray-600 mb-6">
                            We've tried our best to answer all common queries that you might have. For further
                            queries, please email us at hello@aifortechies.in
                        </p>

                        {/* See You Inside Message */}
                        <div className="mb-6">
                            <p className="text-lg font-semibold text-gray-800">
                                SEE YOU INSIDE THE COHORT 🤩
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a href="https://forms.gle/CZUPkBSChhbPyTSh6" target="_blank" rel="noopener noreferrer">
                            <button className="relative overflow-hidden bg-gradient-to-r from-orange-500  to-red-500 text-white font-extrabold text-base px-6 py-3 rounded-xl shadow-[0_4px_0px_0px_rgba(180,60,0,1),0_0_15px_rgba(255,100,0,0.6)] active:shadow-[0_2px_0px_0px_rgba(180,60,0,1),0_0_8px_rgba(255,100,0,0.4)] active:translate-y-1  hover:scale-105  transition-all duration-300  group
">
                                <span className="relative z-10">
                                    Register For Master Class
                                </span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-[-20deg]">
                                </span>
                            </button>
                        </a>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-3">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="text-gray-800 font-medium">{faq.question}</span>
                                    {openFAQ === faq.id ? (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>

                                {openFAQ === faq.id && faq.answer && (
                                    <div className="px-6 bg-pink-100 pb-4">
                                        <div className="border-t border-gray-100 pt-4">
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom Registration Banner */}
                    <div className="mt-12 text-center">
                        <div className=" text-black py-4 px-6 rounded-lg">
                            <h1 className="text-lg  font-bold">
                                REGISTER BEFORE MIDNIGHT OF August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}
