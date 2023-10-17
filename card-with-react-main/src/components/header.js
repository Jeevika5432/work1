import React from 'react';
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>About</li>
                <li className={styles.item}>Contact</li>
               
            </ul>
        </header>
    );
};

export default Header;