"use client";

import Footer from "../(site)/_components/Footer";
import Header from "../(site)/_components/Header";

const CourseCarousel = () => {
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      description:
        "Master MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
      image:
        "https://blog.nextideatech.com/wp-content/uploads/2022/12/1_FVtCyRdJ6KOr4YswTtwMeA.jpeg",
      url: "mernStackPage",
    },
    {
      id: 2,
      title: "Python Programming", 
      description:
        "Learn Python from basics to advanced concepts for web development, data science, and automation.",
      image:
        "https://venus-online-software-training.com/wp-content/uploads/2023/12/Python-Symbol.png",
      url: "pythonDeveloperPage",
    },
    {
      id: 3,
      title: "Data Analysis",
      description:
        "Become proficient in analyzing and visualizing data to extract meaningful insights.",
      image:
        "https://www.ishir.com/wp-content/uploads/2024/01/Data-Scientist-vs-Data-Analyst-vs-Data-Engineer-ISHIR.jpg",
      url: "mernStackPage",
    },
  ];

  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h4 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            Choose your path:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-600 h-full"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{course.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                      {course.description}
                    </p>
                  </div>
                  <button
                    onClick={() => window.location.href = course.url}
                    className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 text-center mt-auto"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseCarousel;
