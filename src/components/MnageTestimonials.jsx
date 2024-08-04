import React from 'react';
import { FaStar } from 'react-icons/fa';
import img from "../assets/rsc/c1.avif"
import img2 from "../assets/rsc/c2.avif"
import img3 from "../assets/rsc/c3.avif"
import img4 from "../assets/rsc/c4.avif"
import img5 from "../assets/rsc/c5.avif"
import img6 from "../assets/rsc/c6.avif"

const testimonialsData = [
    {
      name: "John Doe",
      role: "Web Developer",
      image: img,
      content: "The courses on this platform have been instrumental in advancing my career. The content is top-notch and very practical.",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      image: img2,
      content: "I've learned so much about user experience design. The instructors are knowledgeable and the projects are challenging yet rewarding.",
      rating: 4
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      image: img3,
      content: "The data science track here is comprehensive and up-to-date. It's helped me transition into a new career field.",
      rating: 5
    },
    {
      name: "Emily Brown",
      role: "Mobile App Developer",
      image: img4,
      content: "The mobile development courses are fantastic. I've built several apps using the skills I've learned here.",
      rating: 4
    },
    {
      name: "Chris Lee",
      role: "DevOps Engineer",
      image: img5,
      content: "The DevOps curriculum is thorough and practical. It's improved my workflow and made me much more efficient.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Frontend Developer",
      image: img6,
      content: "I've taken multiple frontend courses and they've all been excellent. The instructors really know their stuff.",
      rating: 5
    },
  ];
function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto p-4 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center underline">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg transform transition hover:scale-105 border p-6 relative"
          >
            <div className="flex items-center mb-4">
              <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={`${testimonial.name}'s profile`} />
              <div>
                <h2 className="font-bold text-xl">{testimonial.name}</h2>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-12">{testimonial.content}</p>
            <button className="absolute bottom-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Edit
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;