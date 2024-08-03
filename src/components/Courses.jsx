import React from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';
import img from "../assets/rsc/c1.avif"
import img2 from "../assets/rsc/c2.avif"
import img3 from "../assets/rsc/c3.avif"
import img4 from "../assets/rsc/c4.avif"
import img5 from "../assets/rsc/c5.avif"
import img6 from "../assets/rsc/c6.avif"

const coursesData = [
  {
    description: "Learn the basics of HTML and start building web pages.",
    author: img,
    authorName: 'Techsnap',
    courseName: 'Learn HTML',
    difficulty: 'Beginner | Released',
    units: 12,
    quizzes: 3,
    assessments: 3,
  },
  {
    description: "Dive into CSS and style your websites beautifully.",
    author: img2,
    authorName: 'Design Master',
    courseName: 'Master CSS',
    difficulty: 'Beginner | Released',
    units: 15,
    quizzes: 5,
    assessments: 4,
  },
  {
    description: "Master JavaScript to build dynamic and interactive web applications.",
    author: img3,
    authorName: 'Code Ninja',
    courseName: 'JavaScript Essentials',
    difficulty: 'Advanced | Released',
    units: 20,
    quizzes: 6,
    assessments: 5,
  },
  {
    description: "Master JavaScript to build dynamic and interactive web applications.",
    author: img4,
    authorName: 'Code Ninja',
    courseName: 'JavaScript Essentials',
    difficulty: 'Advanced | Released',
    units: 20,
    quizzes: 6,
    assessments: 5,
  },
  {
    description: "Master JavaScript to build dynamic and interactive web applications.",
    author: img5,
    authorName: 'Code Ninja',
    courseName: 'JavaScript Essentials',
    difficulty: 'Advanced | Released',
    units: 20,
    quizzes: 6,
    assessments: 5,
  },
  {
    description: "Master JavaScript to build dynamic and interactive web applications.",
    author: img6,
    authorName: 'Code Ninja',
    courseName: 'JavaScript Essentials',
    difficulty: 'Advanced | Released',
    units: 20,
    quizzes: 6,
    assessments: 5,
  },
];

const CourseList = () => {
  const navigate = useNavigate();
  const { toggleAddCoursePopup } = useOutletContext();

  const handleCourse = () => {
    navigate("/course/started/info");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 underline">Explore Courses</h1>
          <div className="flex items-center w-full md:w-auto">
            <div className="relative w-full md:w-64 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search for a course"
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
            </div>
            <button
              className="p-2 ml-2 rounded-md text-white font-semibold shadow-lg transform transition duration-300 hover:scale-105"
              onClick={toggleAddCoursePopup}
              style={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
              }}
            >
              Add Course
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition hover:scale-105 border "
            >
              <img className="w-full h-48 object-cover" src={course.author} alt={`${course.courseName} Cover`} />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{course.courseName}</h2>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                <div className="flex gap-4 mb-4 text-indigo-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zM2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 4h4v4H6V9z" />
                    </svg>
                    {course.units} Units
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 3a1 1 0 012 0v2a1 1 0 01-2 0V6zm2 0a1 1 0 011 1v1a1 1 0 01-1 1H7V7h2V6z" />
                    </svg>
                    {course.quizzes} Quizzes
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 00-1 1v6H6a1 1 0 100 2h3v6a1 1 0 102 0v-6h3a1 1 0 100-2h-3V3a1 1 0 00-1-1z" />
                    </svg>
                    {course.assessments} Assessments
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">Web Development</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">Frontend</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-600 text-sm">{course.difficulty}</div>
                  <button
                    className="flex items-center gap-1 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-indigo-600"
                    onClick={() => handleCourse(index)}
                  >
                    <span>Get Started</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseList;
