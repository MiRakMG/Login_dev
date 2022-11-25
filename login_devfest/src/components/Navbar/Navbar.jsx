import React from "react";
import styles from "./Navbar.module.scss"

const Navbar = () => {

    return (
        <div>
            
            <div className={styles.navig}>
                <div className={styles.logo}>
                    <h1>DevFest</h1>
                </div>
                <nav>
                    <a href="/dashboard">Accueil</a>
                    <a href="/#">Produits</a>
                    <a href="/#">A propos</a>
                    <a href="/#">Support</a>
                </nav>
                <div className={styles.sign}>
                    <button className={styles.btn}>S'inscrire</button>
                </div>
            </div>
        </div>
    )

}

export default Navbar;