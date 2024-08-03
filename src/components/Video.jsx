import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-4">
          <h2 className="text-2xl font-bold text-white">React in One Hour</h2>
        </div>
        <div className="relative w-full overflow-hidden pb-[56.25%] bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/SqcY0GlETPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
