import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DisplayCard } from './components/displayCard';
import { Error } from './components/error';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Home } from './containers/home';
export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path={"/"} element={<Home/>} exact={true} />
      <Route path={"/houses"} element={<DisplayCard/>}/>
      <Route path={"/*"} element={<Error/>} exact={true} />



    </Routes>

    <Footer/>
    </BrowserRouter>
   
  )
}

export default Router;
