import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DisplayCard } from './components/displayCard';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Home } from './containers/home';
export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path={"/"} element={<Home/>}/>
      <Route path={"houses"} element={<DisplayCard/>}/>



    </Routes>

    <Footer/>
    </BrowserRouter>
   
  )
}

export default Router;
