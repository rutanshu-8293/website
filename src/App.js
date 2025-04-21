import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import SignInPage from './component/SignInPage';
import SignUpPage from './component/SignUpPage';
import Footer from './component/Footer';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
