import React from 'react';

const CourseMedia = () => {

  return (
    <div className="container mx-auto p-4 lg:p-8">
      
      <div className="relative mb-6 hidden lg:block">
      <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-1/2 h-1/2 object-cover rounded-l-lg"
              />
      </div>

      
      <div className="text-center mb-6">
        <p className="text-lg text-gray-600">Master advanced React concepts and build scalable applications.</p>
      </div>

      
      <div className="relative mb-6 lg:hidden">
      <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-1/2 h-1/2 object-cover rounded-l-lg"
              />
      </div>
    </div>
  );
};

export default CourseMedia;
