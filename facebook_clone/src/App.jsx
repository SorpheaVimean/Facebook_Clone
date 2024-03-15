// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<HomePage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App