import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "../assets/components/Detail";
import { App } from "../pages/App";
import { Register } from "../pages/auth/Register";
import { LoginPage } from "../pages/auth/LoginPage";
import { Movie } from "../pages/Movie";
import TokenProtected from "../assets/components/protected/TokenProtected";

export const RouterDetail = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path='/Home' element={<TokenProtected><App/></TokenProtected>}/>
        {/* <Route path='/Home' element={<Movie/>}/> */}
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};
