# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



import React , {useState}from 'react';
import { FaRocket, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/rsc/icons8-search-50 (4).png';
import './courses-style.css';


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
  const [isAddPopup, setisAddPopup] = useState(false);
  const AddPopup = () => {
    setisAddPopup(!isAddPopup)
  }

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
            onClick={AddPopup}
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
              {/* <div className="course-banner">
                <img src={course.banner} alt="Course Banner" className="banner" />
              </div> */}
              <div className="course-details mt-2">
              <h3 className="course-name cd">{course.courseName}</h3>
              <div className='px-4'>
              <p className='font-semibold text-md'>{course.description}</p>
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
    {isAddPopup && (
      <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center">
      <div class="flex bg-white">
 
  <div class="w-1/2">
    <img
      src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
      alt="Course Image"
      class="w-full h-full object-cover rounded-lg"
    />
  </div>
  
  
  <div class="w-1/2 p-4 flex flex-col justify-between">
    <div>
      <h3 class="text-2xl font-semibold mb-4">Course Title</h3>
      <input
        type="text"
        placeholder="Enter course title"
        class="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        class="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-600"
      >
        Upload Banner Image
      </button>
    </div>
    <div class="flex space-x-4">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={() => setisAddPopup(false)}
      >
        Upload
      </button>
      <button
        class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        onClick={() => setisAddPopup(false)}
      >
        Cancel
      </button>
    </div>
  </div>
</div>

    </div>
    )}
    </>
  );
}

export default Careerpath;


<Droppable droppableId={`droppable-${courseIndex}`}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="p-4 space-y-4"
                        >
                          <div className="lg:w-1/2 md:w-2/3 flex justify-around my-4">
                                    <button
                                      onClick={() =>
                                        handleInternalPopup("Quiz")
                                      }
                                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
                                    >
                                      Quiz
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleInternalPopup("Test")
                                      }
                                      className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
                                    >
                                      Test
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleInternalPopup("Video")
                                      }
                                      className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-300"
                                    >
                                      Video
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleInternalPopup("Article")
                                      }
                                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
                                    >
                                      Article
                                    </button>
                                  </div>
                          {course.items.map((item, itemIndex) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={itemIndex}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="flex justify-between items-center p-2 bg-gray-50 border border-gray-300 rounded-md cursor-move"
                                >
                                  
                                  <div className=" flex items-center space-x-2">
                                    <Link
                                      to={`/introduction`}
                                      className="font-medium"
                                    >
                                      {item.text}
                                    </Link>
                                  </div>

                                  <div className="flex space-x-2">
                                    <button className="border p-2 bg-blue-800 text-white flex cursor-pointer items-center justify-center">
                                      View
                                    </button>
                                    <button className="border p-2 bg-red-700 text-white flex cursor-pointer items-center justify-center">
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>



                    {course.items.map((item, itemIndex) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={itemIndex}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="flex justify-between items-center p-2 bg-gray-50 border border-gray-300 rounded-md cursor-move"
                                >
                                  
                                  <div className=" flex items-center space-x-2">
                                    <Link
                                      to={`/introduction`}
                                      className="font-medium"
                                    >
                                      {item.text}
                                    </Link>
                                  </div>

                                  <div className="flex space-x-2">
                                    <button className="border p-2 bg-blue-800 text-white flex cursor-pointer items-center justify-center">
                                      View
                                    </button>
                                    <button className="border p-2 bg-red-700 text-white flex cursor-pointer items-center justify-center">
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
