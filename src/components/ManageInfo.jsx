import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function CourseDetails ()  {
 
   const skills = [
    "Understanding of React Hooks",
    "State Management with Context API",
    "Building Scalable Components",
    "Advanced Performance Optimization"
  ];
  const prerequisites = [
    "Basic understanding of React",
    "Familiarity with JavaScript ES6+",
    "Experience with HTML and CSS"
  ];

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="w-full md:w-2/3">
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl underline">Advanced React Development</h1>
      </div>
      
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Overview</h2>
        <button className='py-2 px-4 mb-1 bg-blue-600 rounded-lg text-white'>Add</button>
        </div>
        <p className="text-gray-700">This course dives deep into advanced React concepts, including hooks, context, and state management. Learn how to build scalable applications with cutting-edge React techniques
        </p>
      </div>
      
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills You Will Gain</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between">
              <div className="flex">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              
              {skill}
              </div>
              <div className=''>
              <button className='p-2 mr-2'><FaEdit/></button>
              <button className='p-2 mr-2 text-red-700'><FaTrash/></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {prerequisites.map((prerequisite, index) => (
            <li key={index} className="flex justify-between">
              <div className="flex">
              <svg className="w-5 h-5 text-yellow-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {prerequisite}
              </div>
              <div className=''>
              <button className='p-2 mr-2'><FaEdit/></button>
              <button className='p-2 mr-2 text-red-700'><FaTrash/></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default CourseDetails;
