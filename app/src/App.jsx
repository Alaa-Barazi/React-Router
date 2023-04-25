import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Home from './Components/Home/Home';
import ShowP from './Components/ShowP/ShowP';
function App() {
  
  return (
    <>
 
    <div>
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Header />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Product" element={<Product />}>
        
         
        </Route>
        <Route path="/ShowP" element={<ShowP />}>
          <Route path=":id" element={<ShowP />} />
         
        </Route>
        
      </Routes>
    </div>
    </>
  )
}

export default App
