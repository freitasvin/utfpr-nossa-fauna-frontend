import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Initial } from './pages/Initial'
import { Register } from './pages/Register'
import { Dashboard } from './pages' 
import { GlobalStyles } from './GlobalStyles'
import { EditCadastro } from './pages/EditeCadastro'

export const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<EditCadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}