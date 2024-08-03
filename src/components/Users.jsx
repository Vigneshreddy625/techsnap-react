import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const users = [
    { username: 'Vignesh', gmail: 'vigneshreddy625@gmail.com', dateJoined: '2024-01-08' },
    { username: 'Mahesh', gmail: 'mahesh@gmail.com', dateJoined: '2023-07-15' }
    
  ];


  return (
    <>
    <div className="overflow-x-auto px-4 lg:px-20 py-4">
        <div className="mb-8">
        <h3 className='text-2xl font-bold underline'>Enrolled Users</h3>
        </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Username</th>
              <th className="px-4 py-2 text-left text-gray-600">Gmail</th>
              <th className="px-4 py-2 text-left text-gray-600">Date Joined</th>
              <th className="px-4 py-2 text-center text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.gmail}</td>
                <td className="px-4 py-2">{user.dateJoined}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2 justify-center items-center">
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition-colors">
                      Suspend
                    </button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
                      View Details
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
                      Remove User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Users;
