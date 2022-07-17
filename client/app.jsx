import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import GetQuotes from './components/get-quotes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-quotes" element={<GetQuotes />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
