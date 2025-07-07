import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer sm:w-64  p-1 rounded-lg shadow-md hover:shadow-lg transition min-w-[200px] bg-gray-200"
      onClick={() => navigate(`/video/${video.id}`)}
    >
      <img src={video.thumbnail} alt={video.title} className="rounded-md w-full h-auto" />
      <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
      <p className="text-xs text-gray-600">{video.channel}</p>  
      <p className="text-xs text-gray-500">{video.views} views</p>
    </div>
  );
};

export default VideoCard;
