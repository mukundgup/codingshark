"use client";

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
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <h4 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8">
        Choose your path:
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-full max-w-[350px] mx-auto h-[400px] sm:h-[420px] lg:h-[450px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor- hover:shadow-orange-600 transition-all"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md bg-white">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-[45%] object-cover"
              />
              <div className="p-4 sm:p-5 h-[55%] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{course.description}</p>
                </div>
                <button 
                  onClick={() => window.location.href = course.url}
                  className="w-full sm:w-auto mt-3 inline-block bg-white border-2 border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-100 hover:border-orange-200 transition-all"
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCarousel;
