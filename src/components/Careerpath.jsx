import React, { useState } from 'react';
import { FaRocket, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './courses-style.css';
import { useOutletContext } from 'react-router-dom';

const coursesData = [
  {
    description: "Learn the fundamentals of testing in Ruby on Rails from experienced developers.",
    author: '../assets/rsc/author-1.jpg',
    authorName: 'The Pragmatic Programmers',
    courseName: 'Fundamentals of Testing Using Rails',
    difficulty: 'Advanced',
  },
  {
    description: "Join Alexandre Rousseau to learn how to build your own API with Rails.",
    author: '../assets/rsc/author-2.jpg',
    authorName: 'Alexandre Rousseau',
    courseName: 'Building your own API with Rails',
    difficulty: 'Beginner',
  },
  {
    description: "Eric Gitonga guides you through the process of developing web apps with Streamlit.",
    author: '../assets/rsc/author-3.jpg',
    authorName: 'Eric Gitonga',
    courseName: 'Develop Web Apps with Streamlit',
    difficulty: 'Beginner',
  },
  {
    description: "Master the Deno JavaScript runtime with Francesco Leardini and rageal.",
    author: '../assets/rsc/author-4.jpg',
    authorName: 'Francesco Leardini',
    courseName: 'Master the Deno JavaScript Runtime',
    difficulty: 'Beginner',
  },
  {
    description: "Learn to master big data with Apache Spark and Java from Juan Bruno.",
    author: '../assets/rsc/author-5.jpg',
    authorName: 'Juan Bruno',
    courseName: 'Mastering Big Data with Apache Spark and Java',
    difficulty: 'Intermediate',
  },
  {
    description: "Raghav Aggarwal provides a programmer's guide to AWS S3 applications.",
    author: '../assets/rsc/author-6.jpg',
    authorName: 'Raghav Aggarwal',
    courseName: 'A Programmer’s Guide to AWS S3',
    difficulty: 'Beginner',
  },
];

function Careerpath() {
  const navigate = useNavigate();
  const { toggleAddCareerPathPopup } = useOutletContext();

  const handlePreview = (courseId) => {
    navigate(`/career-path/preview/info`);
  };

  return (
    <>
      <div className="courses-container">
        <div className="flex flex-col w-full md:flex-row justify-between items-center px-8 mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0 underline">Explore Career Path</h1>
          <div className="flex items-center w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search for a course"
                className="flex-grow w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
            </div>
            <button
              className="p-2 ml-2 rounded-md text-white font-bold shadow-lg transform transition duration-300 hover:scale-105"
              onClick={toggleAddCareerPathPopup}
              style={{
                background: 'radial-gradient(circle farthest-corner at 10% 20%, rgb(162, 88, 253) 0%, rgba(116,182,247,1) 90%)'
              }}
            >
              Add Course
            </button>
          </div>
        </div>
        <div className="courses course-item">
          <div className="course-sets">
            {coursesData.map((course, index) => (
              <div className="course" key={index}>
                <div className="course-details mt-2">
                  <h3 className="course-name cd">{course.courseName}</h3>
                  <div className="px-4">
                    <p className="font-semibold text-md">{course.description}</p>
                  </div>
                  <div className="course-author cd">
                    <img src={course.author} alt="Course Author" className="author" />
                    <p>{course.authorName}</p>
                  </div>
                  <div className="diff-preview cd">
                    <div className="flex gap-1">
                      <FaRocket className="w-6 h-6 text-blue-500" />
                      <p>Skill Path 3</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn" onClick={() => handlePreview(index)}>Preview</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Careerpath;
