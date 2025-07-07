import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/videos.json';

const VideoDetailPage = () => {
  const { id } = useParams();

  // Ensure id comparison is reliable (== to handle string/number mismatch)
  const video = videos.find((v) => v.id == id);

  if (!video) return <p className="text-red-500">Video not found</p>;

  // Load thumbnail from public folder
  const thumbnailSrc = video.thumbnail.startsWith('/')
    ? process.env.PUBLIC_URL + video.thumbnail
    : video.thumbnail;

  return (
    <div className="space-y-4 p-4">
      <img
        src={thumbnailSrc}
        alt={video.title}
        className="w-full rounded-xl max-h-[500px] object-cover"
      />
      <h2 className="text-2xl font-bold">{video.title}</h2>
      <p className="text-gray-600">{video.channel} • {video.views} views</p>
      <p className="text-gray-700">This is a demo video. You can add more info here.</p>
    </div>
  );
};

export default VideoDetailPage;
