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
import Header from "../(site)/_components/Header";
import Footer from "../(site)/_components/Footer";
import genrate from '../../public/pythonimage/generate.png'
import Manage from '../../public/pythonimage/managedata.png'
import Debug from '../../public/pythonimage/debug.png'
import Analyze from '../../public/pythonimage/analyze.png'
import Automate from '../../public/pythonimage/automate.png'
import Become from '../../public/pythonimage/become.png'
import naukri from '../../public/pythonimage/naukri.webp'
import linkedin from '../../public/pythonimage/Linkedin.webp'
import Glassdoor from '../../public/pythonimage/Glassdoor.webp'
import Indeed from '../../public/pythonimage/Indeed.webp'
export default function Python() {
    const [selected, setSelected] = useState<number[]>([]);
    const toggleSelect = (index: number) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    const items = [
        "I constantly worry about job security given the current state of the job market.",
        "I want to learn how to write clean and efficient Python code with best practices.",
        "I need guidance on effective debugging techniques to solve code issues faster.",
        "I want to leverage AI to find optimal code solutions without extensive searching.",
        "I'm looking to automate my daily programming tasks to improve productivity.",
        "I aim to advance my career and reach senior technical leadership positions.",
    ];

    const mentors = [
        {
            id: 2,
            name: "Pradeep Patidar",
            image: pradeep,
            credentials: [
                "IIT Kharagpur Alumni",
                "Trained more than 2,10,000 working professionals in AI and other professional tools",
                "TEDx and G20 Speaker"
            ],
            description: "Hi, I am Pradeep Patidar and I will be your mentor for the upcoming AI for Tech Professionals cohort.",
            experience: "I graduated from IIT Kharagpur and have been in the educational industry for several years now. As a teacher, I was fortunate enough to secure the highest package (INR 1.5 cr) in India.",
            additionalInfo: "I too have built multiple eight-figure companies with the help of AI, and I am super excited to share all my knowledge and experience with you to help you increase your productivity using AI.",
            workshop: "Join me in this workshop specifically for tech professionals and let's take the first step towards your success together."
        }
    ];
    const [openFAQ, setOpenFAQ] = useState('start');
    const toggleFAQ = (faqId: string) => {
        setOpenFAQ(openFAQ === faqId ? '' : faqId);
    };
    const faqData = [
        {
            id: 'start',
            question: 'When will the cohort start?',
            answer: 'The Python using AI cohort will start today. The live mega webinar will be hosted this Sunday (August 31, 2025 11:00 AM).'
        },
        {
            id: 'prerequisite',
            question: 'Is there any prerequisite required?',
            answer: 'No, the workshop does not require any prerequisites.'
        },
        {
            id: 'certified',
            question: 'Is it a certified cohort?',
            answer: 'Yes! it is certified cohort by AI For Techies'
        },
        {
            id: 'notes',
            question: 'Do you get notes & assignments to practice?',
            answer: 'Absolutely. It is a completely hands-on Masterclass where you will also get notes, reference material & assignments for your future reference.'
        },
        {
            id: 'age',
            question: 'Is there any age limit for the cohort?',
            answer: 'No, there is no age limit. I understand that technology might scare some people especially if you are elder & more experienced, however, the cohort will cover tools that you will easily be able to learn, master & use without really being a tech-expert or learning coding.'
        },
        {
            id: 'time',
            question: 'How much time will I be able to save?',
            answer: 'With the help of AI, you will be able to save up to 80% of your work efforts every day while working on your day-to-day tech work.'
        },
        {
            id: 'payment',
            question: 'I made the payment but didn\'t receive any email',
            answer: 'Please write to us at hello@aifortechies.in & our awesome support team will get back to you as soon as possible.'
        }
    ];
    return (
        <>
            <Header />
            <div
                className="relative min-h-screen flex flex-col items-center justify-center  bg-center p-6"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/80" />

                {/* Content */}
                <div className="relative z-10 max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        "BECOME A <span className="text-orange-600">PYTHON PRO</span> IN JUST
                        <span className="text-orange-600"> 30 DAYS WITH AI</span>"
                    </h1>
                    <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                        Level up your Python skills with our intensive 30-day cohort. Learn directly from industry experts, build real-world projects, and gain the confidence to become a job-ready Python developer in just one month!
                    </p>

                    {/* Card */}
                    <div className="bg-orange-100 rounded-2xl p-6 md:p-10 text-white shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Left Side - Image */}
                            <div className="bg-white rounded-2xl p-4">
                                <Image
                                    src={pradeepsir}
                                    alt="Python Course"
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
                                        ✔ No prior knowledge of python or AI required
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="text-yellow-400 font-bold text-lg">
                                    ⭐ 4.87/5 (18,365 reviews) 71,365 students
                                </div>

                                {/* CTA */}
                                <button className="bg-orange-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-500">
                                    Become A Python Using AI Expert Now At <span className="line-through">₹1999</span> ₹199/-
                                </button>
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
                                    <span className="text-green-500 text-2xl">✔</span> Learn Python from basic
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Create interactive visualisations in Python in minutes
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Solve real-world case studies
                                </li>
                            </ul>


                            <ul className="space-y-4 text-lg text-gray-800">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Debug python code in seconds using AI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Create website in Python using AI while saving 95% of time
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500 text-2xl">✔</span> Write code in python by using AI in seconds
                                </li>
                            </ul>
                        </div>


                        {/* CTA Button */}
                        <button className="bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-orange-700">
                            Become A Python Using AI Expert Now At <span className="line-through">₹1999</span> ₹199/-
                        </button>
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
                                <span className="bg-white px-3 py-1 rounded-lg shadow">What is Programming?</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Variables and Data Types</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Arithmetic Operations</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Conditional Statements</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Loops</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Lists</span>
                            </div>
                        </div>


                        {/* Week 2 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 2</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Functions & Parameters</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">String Methods</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">String Operations</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Understanding Syntax Errors</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Error Handling</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">File Handling</span>
                            </div>
                        </div>


                        {/* Week 3 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 3</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Introduction to Dictionaries</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Tuples and Sets</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Python Modules</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Data Structures</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Tuples, Sets & Dictionaries</span>
                            </div>
                        </div>


                        {/* Week 4 */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 4</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Data Visualization</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Project Planning</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Building CLI Applications</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Live Project Building</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Hands-on Courses</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Problem Solving Exercises</span>
                            </div>
                        </div>


                        {/* Final Project */}
                        <div className="bg-orange-100 rounded-2xl p-6 text-left shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Final Project</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Comprehensive Quiz</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Revisiting Key Concepts</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Project Presentations</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">Guidance on Next Steps</span>
                                <span className="bg-white px-3 py-1 rounded-lg shadow">and more...</span>
                            </div>
                        </div>


                        {/* Note Section */}
                        <div className="bg-red-50 rounded-2xl p-6 text-center shadow-md flex items-center justify-center">
                            <p className="text-gray-700 font-medium">
                                The cohort is designed for everyone who wants to utilize AI more efficiently in their work and enhance their productivity.
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
                    If you checked ANY of the boxes above, then you’re invited to join the
                    <a
                        href="#"
                        className="text-blue-600 underline ml-1 hover:text-blue-800"
                    >
                        Python using AI Cohort
                    </a>
                    .
                </p>


                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-orange-400 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition">
                        Become A Python Using AI Expert Now At <span className="line-through">₹1999</span> ₹199/-
                    </button>
                    <p className="mt-4 font-bold text-gray-900">
                        Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                    </p>
                </div>
            </div>

            {/* section 5 */}
            <section className="relative bg-blue-100 py-16">
                {/* Wave Top */}
                <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What you'll learn in this Cohort?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Card 1 */}
                        <div className="text-center">
                            <Image
                                src={genrate}
                                alt="Generate Codes"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Generate Codes in any language with AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Discover how AI streamlines data processing, transforming raw data
                                into actionable insights swiftly.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center">
                            <Image
                                src={Manage}
                                alt="Manage Data"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Manage data efficiently with AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Discover how AI streamlines data processing, transforming raw data
                                into actionable insights swiftly.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center">
                            <Image
                                src={Debug}
                                alt="Debug Code"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Debug & Test your codes with AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Learn AI-driven testing techniques to improve software testing
                                efficiency and accuracy.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="text-center">
                            <Image
                                src={Analyze}
                                alt="Analyze Data"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Analyze & Visualize your Data with AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Utilize AI algorithms to automatically transform raw data into
                                visually compelling charts and graphs, speeding up decision-making
                                by 50%.
                            </p>
                        </div>
                        {/*  card 5 */}
                        <div className="text-center">
                            <Image
                                src={Automate}
                                alt="Analyze Data"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Automate day-to-day office work with AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                AI-driven automation is projected to revolutionize 30% of job tasks across industries.
                            </p>
                        </div>

                        {/*  card 6 */}
                        <div className="text-center">
                            <Image
                                src={Become}
                                alt="Analyze Data"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Become AI-Proof, Secure Your Future
                            </h3>
                            <p className="mt-2 text-gray-700">
                                With AI taking over human jobs, you need to become AI-Proof in 2024 and not just keep your job but also grow in it. This cohort will help you do that & avoid being laid off.
                            </p>
                        </div>
                    </div><br></br>
                    <div className="text-center">
                        <button className="bg-orange-400 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition">
                            Become A Python Using AI Expert Now At <span className="line-through">₹1999</span> ₹199/-
                        </button>
                        <p className="mt-4 font-bold text-gray-900">
                            Register Before August 29, 2025 To Unlock All Bonuses Worth Rs. 12300
                        </p>
                    </div>
                </div>


                {/* Wave Bottom */}
                {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div> */}
            </section>

            {/* section 6 */}
            <section className="relative bg-[#EAF6FF] py-16">
                {/* Wave Top */}
                <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div>
                {/* Content */}
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Openings in Python
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 text-center">
                        {/* Card 1 */}
                        <div>
                            <Image
                                src={naukri}
                                alt="Naukri Python Jobs"
                                width={400}
                                height={400}
                                className="rounded-lg shadow-md mx-auto"
                            />
                            <p className="mt-4 text-gray-700 font-medium">
                                1.41 lakh+ Openings on Naukri
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <Image
                                src={linkedin}
                                alt="LinkedIn Python Jobs"
                                width={400}
                                height={400}
                                className="rounded-lg shadow-md mx-auto"
                            />
                            <p className="mt-4 text-gray-700 font-medium">
                                1.2 lakh+ Openings on Linkedin
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div>
                            <Image
                                src={Glassdoor}
                                alt="Glassdoor Python Jobs"
                                width={400}
                                height={400}
                                className="rounded-lg shadow-md mx-auto"
                            />
                            <p className="mt-4 text-gray-700 font-medium">
                                7 thousand+ Openings on Glassdoor
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div>
                            <Image
                                src={Indeed}
                                alt="Indeed Python Jobs"
                                width={400}
                                height={200}
                                className="rounded-lg shadow-md mx-auto"
                            />
                            <p className="mt-4 text-gray-700 font-medium">
                                800+ Openings on Indeed
                            </p>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                    <svg width="1400" height="60" viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,30 C300,10 600,50 900,25 C1000,15 1100,35 1200,20 L1200,60 L0,60 Z" fill="white" />
                    </svg>
                </div>

            </section>

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
                    <button className="bg-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                        Become A Python Using AI Expert Now At{" "}
                        <span className="line-through mr-2">₹1999</span>
                        <span className="text-white font-bold">₹199/-</span>
                    </button>
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
                    By upskilling in AI, you can break free from the limitations of service-based roles and step into exciting, high-growth opportunities in product companies and cutting-edge tech industries.
                </p>

                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">4 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Python Developer
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-blue-500 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">8 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Python Developer with 3 years of experience
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 border-green-600 rounded-lg p-6 bg-white shadow-sm">
                        <h3 className="text-3xl font-bold">21 LPA</h3>
                        <p className="mt-2 text-lg">
                            Average salary of a Python Developer with 3 years of experience who
                            uses AI
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <button className="bg-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                        Become A Python Using AI Expert Now At{" "}
                        <span className="line-through mr-2">₹1999</span>
                        <span className="font-bold">₹199/-</span>
                    </button>
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
                <button className="bg-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                    Become A Python Using AI Expert Now At{" "}
                    <span className="line-through mr-2">₹1999</span>
                    <span className="font-bold">₹199/-</span>
                </button>
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
                    <button className="bg-orange-400 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                        Become A Python Using AI Expert Now At ₹1000 ₹109*
                    </button>
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
                        <button className="bg-orange-400 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                            Become A Python Using AI Expert Now At ₹1800 ₹199/-
                        </button>
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

            <Footer />
        </>

    );
}
