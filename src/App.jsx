import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import VideoDetailPage from "./pages/VideoDetailPage";
import Signup from "./pages/Signup"; // ✅ Correct casing

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/search/:query" element={<SearchPage />} />
              <Route path="/video/:videoId" element={<VideoDetailPage />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
