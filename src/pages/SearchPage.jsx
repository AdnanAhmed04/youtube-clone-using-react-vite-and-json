import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/videos.json';
import VideoCard from '../components/VideoCard';

const SearchPage = () => {
  const { query } = useParams();
  const filtered = videos.filter(
    (v) =>
      v.title.toLowerCase().includes(query.toLowerCase()) ||
      v.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Search Results for: "<span className="text-red-600">{query}</span>"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((video) => <VideoCard key={video.id} video={video} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
