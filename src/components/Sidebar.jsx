import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVertical } from 'lucide-react'; 

const categories1 = ['Home', 'Shorts', 'Subscription'];
const categories2 = ['Trending', 'Music', 'Gaming'];

const Sidebar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigation = (cat) => {
    if (cat.toLowerCase() === 'home') {
      navigate('/');
    } else {
      navigate(`/search/${cat.toLowerCase()}`);
    }
    setShowMenu(false); 
  };

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className=" "
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <aside
        className={`${
          showMenu ? 'block' : 'hidden'
        } md:block fixed md:static z-40 bg-white/70 backdrop-blur-md w-52 p-4 min-h-screen space-y-6 top-32 left-0`}
      >
        <ul className="space-y-2">
          {categories1.map((cat) => (
            <li
              key={`cat1-${cat}`}
              onClick={() => handleNavigation(cat)}
              className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md px-2 py-1 transition-colors"
            >
              {cat}
            </li>
          ))}
        </ul>

        <hr className="border-gray-300" />

        <ul className="space-y-2">
          {categories2.map((cat) => (
            <li
              key={`cat2-${cat}`}
              onClick={() => handleNavigation(cat)}
              className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md px-2 py-1 transition-colors"
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
