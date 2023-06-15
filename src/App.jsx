// import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {<Home />} />
          <Route path="login" element = {<Login />} />
          <Route path="resetPassword" element = {<ResetPassword />} />
          <Route path="signup" element = {<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}