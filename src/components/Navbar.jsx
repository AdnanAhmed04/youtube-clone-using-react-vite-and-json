import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="w-full px-4 py-3 flex flex-wrap md:flex-nowrap justify-between items-center shadow-md sticky top-0 z-50 bg-white gap-4">
      
      <div className="w-full md:w-[20%] flex justify-center md:justify-start">
              <Link to="/" className="text-gray-800 hover:text-red-600 transition">

        <img
          className="w-24 cursor-pointer"
          src="data:image/png;base64,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"
          alt="Logo"
        />  </Link>

      </div>
      <div className="w-full md:w-[60%] flex justify-center">
        <form onSubmit={handleSearch} className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 rounded-l-full border border-zinc-700 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-red-600 px-4 py-2 rounded-r-full hover:bg-red-700 transition-colors text-white text-sm">
            🔍
          </button>
        </form>
      </div>

      <div className="w-full md:w-[20%] flex justify-center md:justify-end items-center gap-4">
        <div className="bg-gray-500 text-white flex items-center gap-1 rounded-2xl px-3 py-1 text-sm hover:bg-gray-600 transition">
          <FaPlus className="text-md" />
          <span className="hidden sm:inline">Create</span>
        </div>
        <button className="text-gray-800 hover:text-red-600 transition">
          <FaBell className="text-xl" />
        </button>
       
  <Link to="/Signup" className="text-gray-800 hover:text-red-600 transition">
    <CgProfile className="text-xl" />
  </Link>
      </div>
    </header>
  );
};

export default Navbar;
