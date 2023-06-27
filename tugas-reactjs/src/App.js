// import axios from 'axios';
import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import CodeMateri from './codeMateri/codeMateri'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeMateriCreate from './CodeMateriCreate/CodeMateriCreate'
// import Navbar from './codeNavbar/navbar';
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
import Tugas11 from './tugas11/tugas11';
import Tugas12 from './tugas12/tugas12';
import Navbar from './Navbar/navbar';
// import Home from './Home'

const App = () => {
    return (
      <>
        {/* <Tugas6 />
        <Tugas7 name='Iklima Mardiana' batch='42' email='11iklimardiana9@gmail.com' />
        <Tugas8 />
        <Tugas9 />
        <Tugas10/> 
        <Tugas11 />*/}
        <BrowserRouter>
          <GlobalProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Tugas12/>} />
              <Route path='/tugas6' element={<Tugas6/>} />
              <Route path='/tugas7' element={<Tugas7 name='Iklima Mardiana' batch='42' email='11iklimardiana9@gmail.com' />} />
              <Route path='/tugas8' element={<Tugas8/>} />
              <Route path='/tugas9' element={<Tugas9/>} />
              <Route path='/tugas10' element={<Tugas10/>} />
              <Route path='/tugas11' element={<Tugas11/>} />
              {/* <Route path='/code-materi' element={<CodeMateri/>} />
              <Route path='/create' element={<CodeMateriCreate/>} />
              <Route path='/edit/:IdData' element={<CodeMateriCreate/>} /> */}
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </>
    );
}

export default App;
