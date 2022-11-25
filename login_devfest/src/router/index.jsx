import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import AdminLayout from "../components/PagesFront/layout";
import DashLayout from "../Dashboard/PagesBack/layout";
import Profile from "../Profile/components/User/Profile";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/front" element={<AdminLayout />} />
                <Route path="/*" element={<DashLayout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;