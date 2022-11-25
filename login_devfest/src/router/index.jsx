import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import AdminLayout from "../components/PagesFront/layout";
import DashLayout from "../Dashboard/PagesBack/layout";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/front" element={<AdminLayout />} />
                <Route path="/*" element={<DashLayout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;