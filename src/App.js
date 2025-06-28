import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import { MovieList } from './components/MovieList';
import { MovieInput } from './components/MovieInput';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    

    </Routes>
    
    
    </BrowserRouter>
    <Nav/>

   
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome, Swikriti!</h1> */}
        {/* <MovieInput/>
         <MovieList/> */}
      {/* </div>
    </div> */}
    </>
  );
}

  


export default App;
