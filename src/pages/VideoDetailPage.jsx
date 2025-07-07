import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/videos.json';

const VideoDetailPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) return <p>Video not found</p>;

  return (
    <div className="space-y-4">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-[80%] rounded-xl max-h-[450px] object-cover"
      />
      <h2 className="text-2xl font-bold">{video.title}</h2>
      <p className="text-gray-600">{video.channel} • {video.views} views</p>
      <p className="text-gray-700">This is a demo video. You can add more info here.</p>
    </div>
  );
};

export default VideoDetailPage;
