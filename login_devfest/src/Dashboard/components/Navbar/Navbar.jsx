import styles from "./Navbar.module.scss";

import React from "react";
import NavContext from "../../Context/NavContext";

// icons
import {
    MdOutlineDashboard,
    MdOutlineAnalytics,
    MdOutlineLogout,
} from "react-icons/md";

import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


import { NavLink } from "react-router-dom";

import { useContext } from "react";

const NavUrl = ({ url, icon, description }) => {
    const { nav, setNav } = useContext(NavContext);
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setNav(!nav);
    };
  
    return (
      <li className={styles.li_navlink}>
        <NavLink
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          onClick={() => checkWindowSize()}
        >
          {icon}
          <span className={styles.description}>{description}</span>
        </NavLink>
      </li>
    );
  };
  
  const Navbar =() => {
    const { nav, setNav } = useContext(NavContext);
    
    return (
        <div 
            className={`${styles.navbar_container} ${
                nav ? styles.navbar_mobile_active : undefined}`}
            >

        <nav className={nav ? undefined : styles.nav_small}>
            
            <div className={styles.logo}>
                <FaTimes className={styles.mobile_cancel_icon} onClick={() => { setNav(!nav);}} />
            </div>
            
            {/* Menu */}
            <ul className={styles.menu_container}>  
            {/* Catégories Voyages */}
                <span className={styles.categories}>
                    {nav ? "Pages" : <BsThreeDots/> }
                </span>
                
                <NavUrl
                url="dashboard"
                icon={< MdOutlineDashboard />}
                description="Dashboard"
                />
                                
                <NavUrl
                url="analyses"
                icon={< MdOutlineAnalytics />}
                description="Analyses"
                />

            {/* Autres */}
                <span className={`${styles.categories}
                ${styles.second_category}`}
                >
                    {nav ? "Paramètres" : <BsThreeDots/> }
                </span>

                <NavUrl
                url="user"
                icon={< AiOutlineUser />}
                description="Utilisateur"
                />

                <NavUrl
                url="setting"
                icon={< AiOutlineSetting />}
                description="Géneral"
                />

            {/* Logout btn */}
                <div className={styles.btn_logout}
                onClick={() => {
                    setNav(!nav);
                }}
                >
                    <MdOutlineLogout />
                </div>
            </ul>
        </nav>

        <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
    )
};

export default Navbar;