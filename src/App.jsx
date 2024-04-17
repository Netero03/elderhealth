import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './pages';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
          <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App