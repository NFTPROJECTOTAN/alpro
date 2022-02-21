import React from 'react';
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './containers/Landing';
import Home from './containers/Home';
import NFTseries from './containers/NFTseries';
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Link = require("react-router-dom").Link;


export default function App() {
  return (
    <div>
      <Routes>
       <Route path='/' exact element={<Landing/>} ></Route>
       <Route path='/home' element={<Home/>} ></Route>
       <Route path='/NFTseries' element={<NFTseries/>} ></Route>
      </Routes>
    </div>
  );
}


