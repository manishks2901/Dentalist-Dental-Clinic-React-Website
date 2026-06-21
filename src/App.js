import './App.scss';
import { useState } from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import GatePage from './pages/GatePage/GatePage';

function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('veloura_unlocked') === 'true'
  );

  const handleUnlock = () => {
    sessionStorage.setItem('veloura_unlocked', 'true');
    setUnlocked(true);
  };

  if (!unlocked) {
    return <GatePage onUnlock={handleUnlock} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/singleservice" element={<Services />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
}

export default App;
