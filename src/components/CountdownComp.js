'use client'

import React, {useEffect, useState} from "react";
import styles from "@/styles/countdown.module.css";
import "@fontsource/red-hat-display"
import "@fontsource/red-hat-display/900.css" // Weight 500.

const CountdownComp = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("11/06/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d >= 0 && h >= 0 && m >= 0 && s >= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {partyTime ? (
                <div className={styles.countdown}>
                    <div className={styles.box}>
                        <p className={styles.top}>{days}</p>
                        <p className={styles.bottom}>JOURS</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.top}>{hours}</p>
                        <p className={styles.bottom}>HEURES</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.top}>{minutes}</p>
                        <p className={styles.bottom}>MINUTES</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.top}>{seconds}</p>
                        <p className={styles.bottom}>SECONDES</p>
                    </div>
                </div>
            ) : (
                <div className={styles.countdown}></div>
            )}
        </>
    );
};

export default CountdownComp;