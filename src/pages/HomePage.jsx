import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import videosData from '../data/videos.json';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosData); 
  }, []);

  return (
    <div className="flex flex-wrap  justify-center item-center gap-4 w-[80vw]">
      {videos.map((video) => (
        
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default HomePage;
