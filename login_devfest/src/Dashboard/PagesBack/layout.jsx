
import styles from "./layout.module.scss";

import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import RightNavbar from "../components/HautNavbar/HautNavbar";
import Analyses from "../components/Analyses/Analyses";
import Dashboard from "../components/Dashboard/Dashboard";

import NavContext from "../Context/NavContext";


const DashLayout = () => {
    const [nav, setNav] = useState(false);
    const value = { nav, setNav};
  
    return (
      <div className={styles.Dash}>
        <NavContext.Provider value={value}>
          <Navbar />
          <Container stickyNav={<RightNavbar />}
          content={
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/analyses' element={<Analyses />} />
            </Routes>
          } />
        </NavContext.Provider>
      </div>
    );
}

export default DashLayout;