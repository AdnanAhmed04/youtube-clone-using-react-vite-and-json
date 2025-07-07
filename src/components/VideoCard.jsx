import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer w-full sm:w-64 p-2 rounded-xl bg-white shadow hover:shadow-lg transition-all duration-200 min-w-[200px]"
      onClick={() => navigate(`/video/${video.id}`)}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="rounded-lg w-full h-36 object-cover"
      />
      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-semibold truncate">{video.title}</h3>
        <p className="text-xs text-gray-600 truncate">{video.channel}</p>
        <p className="text-xs text-gray-500">{video.views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
