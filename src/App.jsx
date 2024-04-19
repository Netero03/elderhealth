import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Home, Login, Media, MohTv, Plans, Services, Blog } from './pages';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mohtv" element={<MohTv />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </main>
  )
}

export default App