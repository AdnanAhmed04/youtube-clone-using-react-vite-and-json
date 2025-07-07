import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import VideoDetailPage from './pages/VideoDetailPage';
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-zinc-100 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/video/:id" element={<VideoDetailPage />} />
                        <Route path="/Signup" element={<Signup />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
