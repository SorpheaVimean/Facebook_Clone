// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/home/HomePage";
import VideoPage from "./pages/video/VideoPage";
import GroupPage from "./pages/group/GroupPage";
import MarketPlacePage from "./pages/maketPlace/MarketPlacePage";
import UserPage from "./pages/profile/UserPage";
import SettingPage from "./pages/setting/SettingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="group" element={<GroupPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="marketplace" element={<MarketPlacePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="setting" element={<SettingPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App