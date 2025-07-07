import React from 'react';

const ShortsCard = ({ short }) => {
  return (
    <div className="w-36 sm:w-40 flex-shrink-0">
      <img
        src={short.thumbnail}
        alt={short.title}
        className="rounded-xl aspect-[9/16] object-cover"
      />
      <h3 className="text-xs mt-1 truncate">{short.title}</h3>
      <p className="text-[10px] text-gray-400">{short.views} views</p>
    </div>
  );
};

export default ShortsCard;
