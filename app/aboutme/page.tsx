
"use client";

import { useEffect, useState, useRef } from "react";
import {
  Award,
  Rocket,
  Target,
  Search,
  Sparkles,
  Lightbulb,
  Users,
  Globe,
  Sprout,
  Calendar,
  Code,
  Presentation,
} from "lucide-react";
import PSirimage from "../../public/images/newpradeepsir.jpg";
import Asirimage from "../../public/images/adarshsir.jpg";
import Footer from "../(site)/_components/Footer";
import Header from "../(site)/_components/Header";



export default function AboutUs1() {
  // State for active sections
  const [activeSection, setActiveSection] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  // Ref to track which headings have been animated
  const animatedHeadings = useRef(new Set());

  // Sample data
  const timelineItems = [
    {
      year: 2018,
      event: "Founded Coding Sharks with just 2 tutors and 15 students",
    },
    {
      year: 2019,
      event: "Expanded curriculum to include web development and mobile app tracks",
    },
    {
      year: 2020,
      event: "Launched online learning platform during the pandemic",
    },
    { year: 2021, event: "Reached 1,000 student milestone" },
    {
      year: 2022,
      event: "Opened second location and introduced advanced AI courses",
    },
    {
      year: 2023,
      event: "Partnered with 5 tech companies for internship placements",
    },
  ];

  const events = [
    {
      name: "Code Camp 2023",
      description: "3-day intensive bootcamp for beginners",
      icon: <Code className="h-6 w-6 text-white" />,
    },
    {
      name: "Hackathon for Good",
      description: "Building solutions for local non-profits",
      icon: <Calendar className="h-6 w-6 text-white" />,
    },
    {
      name: "Tech Talk Series",
      description: "Weekly webinars with industry experts",
      icon: <Presentation className="h-6 w-6 text-white" />,
    },
  ];

  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex((prev) => (prev + 1) % timelineItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [timelineItems.length]);

  // Scroll indicator animation
  const ScrollIndicator = () => (
    <div className="relative flex flex-col items-center">
      <p className="text-white pt-2 mb-1">Scroll Down</p>
      <div className="relative h-16 w-0.5 ml-2">
        <div className="absolute top-0 left-0 w-0.5 h-full bg-white/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-white transform rotate-45 animate-bounce"></div>
      </div>
    </div>
  );

  // Section Heading Component
  const h1 = ({ children, id }: { children: React.ReactNode; id?: string }) => {
    const headingId = id || (children?.toString() ?? 'heading');
    const hasAnimated = animatedHeadings.current.has(headingId);

    return (
      <div className="text-center mb-16 relative">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          onAnimationEnd={() => {
            animatedHeadings.current.add(headingId);
          }}
        >
          {children}
        </h2>
        <div
          className={`h-1 bg-orange-400 mx-auto rounded-full transition-all duration-700 delay-300 ${hasAnimated ? 'w-20' : 'w-0'
            }`}
        />
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="font-sans text-gray-800 max-w-full overflow-x-hidden bg-white">
        {/* Hero Section */}
        <div
          className="relative h-screen w-full flex items-center justify-start pl-8 md:pl-20"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("https://media.gettyimages.com/id/1263676100/video/group-of-business-people-working-in-a-office.jpg?s=640x640&k=20&c=5ADwA4PPsxX_jG8QFqAwvfr_3rdn7gtlsG64VUh_Fyc=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white max-w-xl">
            <h1 className="inline-block border-b border-white text-5xl md:text-6xl font-extrabold mb-8 pb-2 animate-fadeInUp">
              About Us
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fadeInUp animation-delay-200">
              Where passion meets
              <br />
              programming
            </h2>
            <ScrollIndicator />
          </div>
        </div>

        {/* Profile Card - Pradeep */}
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          <div
            className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/newpradeepsir.jpg')" }}

          />

          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Pradeep Patidar</h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
              NodeJS | ExpressJs | MongoDB | MySql |
            </h2>
            <div className="w-full h-0.5 bg-gray-800 mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-16">
              10+ years of experience specializing in React, Node.js, and cloud
              architecture. Passionate about mentoring the next generation of
              developers.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Previously worked at</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  Apoliums infotech india private limited
                </span>
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  FXBytes Technologies Pvt. Ltd.
                </span>
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  Joister
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card - Adarsh (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen">
          <div
            className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/adarshsir.jpg')" }}

          />
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Adarsh Kewat</h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
              Curriculum Director & Front End developer
            </h2>
            <div className="w-full h-0.5 bg-gray-800 mb-8"></div>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-16">
              My journey as a software developer started with a strong foundation
              in programming languages such as JavaScript. Over the years, I have
              honed my skills in FullStack development, with over 5+ years of
              experience.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Previously worked at</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  Aventior
                </span>
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  Apexon
                </span>
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                  Pfizer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Establishment Section */}
        <section
          className="relative py-24 px-5 min-h-screen flex items-center"
          style={{
            backgroundImage: 'url("https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=kiAEBApRWT_qgVrM0MHF3wMxh5H14vfsaDHg8354Y_Y=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center"> When & Why We Started</h1>
            <div className="relative bg-white p-10 lg:p-16  rounded-2xl shadow-xl mt-26">
              <div className="absolute -top-5 left-10 bg-orange-400 text-white px-6 py-2 rounded-full font-semibold text-xl">
                2018
              </div>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Coding Sharks</strong> began as a small tutoring service
                in a local co-working space. What started as weekend coding
                workshops quickly evolved into a comprehensive educational
                platform as we saw the growing need for personalized,
                high-quality coding education.
              </p>
              <p className="text-lg leading-relaxed">
                Our founders, both industry veterans, recognized that
                traditional computer science education often left graduates
                unprepared for real-world development challenges. They
                envisioned a learning environment that would bridge this gap by
                combining theoretical knowledge with practical, hands-on
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">Why Choose Coding Sharks?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Industry-Active Instructors",
                  description: "Learn from professionals who work in the field and bring real-world experience to the classroom.",
                  icon: <Award className="w-6 h-6 text-white" />,
                },
                {
                  title: "Project-Based Curriculum",
                  description: "Build your portfolio while you learn with projects that simulate real development environments.",
                  icon: <Code className="w-6 h-6 text-white" />,
                },
                {
                  title: "Small Class Sizes",
                  description: "Enjoy personalized attention with our maximum 8:1 student-to-instructor ratio.",
                  icon: <Users className="w-6 h-6 text-white" />,
                },
                {
                  title: "1-on-1 Mentorship",
                  description: "Get paired with a dedicated mentor who guides your learning journey and career development.",
                  icon: <Rocket className="w-6 h-6 text-white" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
                >
                  <div className="absolute top-5 right-5 text-6xl font-extrabold text-orange-400/10">
                    0{index + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choosing the Right Class Section */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">How to Choose the Right Class</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Assess Your Current Level",
                  description: "Be honest about your skills. Taking a class that's too advanced can be discouraging, while one that's too basic will bore you.",
                  icon: <Target className="w-6 h-6 text-white" />,
                },
                {
                  title: "Consider Your Goals",
                  description: "Are you learning to change careers, enhance current skills, or just for fun? Different goals require different learning paths.",
                  icon: <Rocket className="w-6 h-6 text-white" />,
                },
                {
                  title: "Try Before You Commit",
                  description: "Take advantage of our free intro sessions to get a feel for the teaching style and content before enrolling.",
                  icon: <Search className="w-6 h-6 text-white" />,
                },
              ].map((tip, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full mb-6">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section className="py-24 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">Our Vision & Values</h1>
            <div className="flex flex-wrap justify-center gap-5">
              {[
                { name: "Excellence", icon: <Sparkles className="w-5 h-5 text-white" /> },
                { name: "Innovation", icon: <Lightbulb className="w-5 h-5 text-white" /> },
                { name: "Community", icon: <Users className="w-5 h-5 text-white" /> },
                { name: "Accessibility", icon: <Globe className="w-5 h-5 text-white" /> },
                { name: "Growth Mindset", icon: <Sprout className="w-5 h-5 text-white" /> },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">{value.icon}</span>
                  <span>{value.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">Our Journey</h1>
            <div className="relative max-w-4xl mx-auto mt-16 px-5">
              <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-400/30 transform -translate-x-1/2">
                <div className="absolute bottom-0 left-0 w-full bg-orange-400 transition-all duration-1000" style={{ height: '100%' }}></div>
              </div>

              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 transition-all duration-500 ${activeTimelineIndex === index ? 'opacity-100' : 'opacity-70'
                    }`}
                >
                  <div className={`absolute left-1/2 md:left-1/2 w-5 h-5 bg-orange-400 rounded-full transform -translate-x-1/2 z-10 transition-all duration-300 ${activeTimelineIndex === index ? 'scale-125 bg-orange-500 shadow-lg' : ''
                    }`}></div>

                  <div className={`w-full md:w-2/5 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'
                    } ${activeTimelineIndex === index ? 'transform -translate-y-1 shadow-xl' : ''
                    } ml-8 md:ml-0`}>
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">{item.year}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        {/* <section className="py-24 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">Events We've Organized</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-400/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-6 right-8 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                      {event.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{event.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Partners Section */}
        {/* <section className="py-24 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-sm mb-4 text-center">Our Partners</h1>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We're proud to collaborate with leading tech companies and educational institutions:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["TechCorp", "EduInnovate", "DevHub", "CodeAcademy"].map((partner, index) => (
                <div
                  key={index}
                  className="h-24 bg-white flex items-center justify-center rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold text-gray-600 text-lg"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}