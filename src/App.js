import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Initial } from './pages/Initial';
import { Dashboard } from './pages' 
import { GlobalStyles } from './GlobalStyles'

export const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}