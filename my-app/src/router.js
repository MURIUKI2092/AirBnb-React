import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DisplayCard } from './components/displayCard';
import { Error } from './components/error';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Description } from './containers/Description';
import { Home } from './containers/home';
export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path={"/"} element={<Home/>} exact={true} />
      <Route path={"/houses"} element={<DisplayCard/>}/>
      <Route path={"/*"} element={<Error/>} exact={true} />
      <Route path={"/houses/description"} element={<Description/>} exact={true} />



    </Routes>

    <Footer/>
    </BrowserRouter>
   
  )
}

export default Router;
