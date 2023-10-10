'use client'

import React, {useEffect, useState} from "react";
import styles from "@/styles/navbar.module.css";
import Image from 'next/image'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbar = document.querySelector('nav');
            if (scrollPosition === 0) {
                navbar.classList.remove(styles.scrolled);
            } else {
                navbar.classList.add(styles.scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.items} id={styles.desktop}>
                <div className={styles.logo}>
                    <a href={'https://zenmondrops.com/'}>
                        <Image
                            src={'/blanc.png'}
                            alt={'logo-zen'}
                            width={50}
                            height={50}
                            priority={true}
                        />
                    </a>
                </div>
                <div className={styles.link}>
                    <a href={'#home'}><p>ACCUEIL</p></a>
                    <div className={styles.dot}></div>
                    <a href={'#about'}><p>A PROPOS</p></a>
                    <div className={styles.dot}></div>
                    <a href={'#soiree'}><p>LA SOIRÉE</p></a>
                    <div className={styles.dot}></div>
                    <a href={'#speaker'}><p>LES EXPERTS</p></a>
                    <div className={styles.dot}></div>
                    <a href={'#inscription'}><p>INSCRIPTION</p></a>
                    <div className={styles.dot}></div>
                    <a href={'#partenaires'}><p>PARTENAIRES</p></a>
                    <div className={styles.dot}></div>
                    <a href={''}><p>CONTACT</p></a>
                </div>
            </div>
            <div className={styles.items} id={styles.mobile}>
                <div className={styles.logo}>
                    <a href={'https://zenmondrops.com/'}>
                        <Image
                            src={'/blanc.png'}
                            alt={'logo-zen'}
                            width={50}
                            height={50}
                            priority={true}
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;