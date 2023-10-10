'use client'

import styles from '@/styles/home.module.css'
import Image from "next/image";
import Iframe from 'react-iframe';
import "@fontsource/red-hat-display/700.css" // Weight 500.
import "@fontsource/red-hat-display/500.css" // Weight 500.

import React, {useEffect, useState} from "react";
import CountdownComp from "@/components/CountdownComp";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
    const [hoverMarina, setMarina] = useState(false);
    const [hoverPierre, setPierre] = useState(false);
    const [hoverMohamed, setMohamed] = useState(false);
    const [hoverOlivier, setOlivier] = useState(false);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offset = 50;
                    const offsetPosition = targetElement.id === 'home' ? 0 : targetElement.offsetTop - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);
    const clickContact = () => {
        window.location.href='https://google.com';
    }
    const onPierre = () => {
        setPierre(true);
    }
    const offPierre = () => {
        setPierre(false);
    }
    const onMarina = () => {
        setMarina(true);
    }
    const offMarina = () => {
        setMarina(false);
    }
    const onMohamed = () => {
        setMohamed(true);
    }
    const offMohamed = () => {
        setMohamed(false);
    }
    const onOlivier = () => {
        setOlivier(true);
    }
    const offOlivier = () => {
        setOlivier(false);
    }
    const [planning, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            // Code d'animation ici
            console.log('Element est visible, déclencher l\'animation');
        }
    }, [inView]);

    return (
        <div className={styles.bodypage}>
            <section id={'home'}></section>
            <div className={styles.poster}>
                <Image
                    src={'/neuroday.svg'}
                    alt={'logo-neuroday'}
                    width={900}
                    height={400}
                    priority={true}
                />
                <div className={styles.poscount}>
                    <CountdownComp/>
                </div>
            </div>
            <section id={'about'}>
                <div className={styles.about}>
                    <div className={styles.row}>
                        <div className={styles.infos}>
                            <p>Bienvenue sur le site officiel du Neuro’Day !</p>
                            <span>Le <b>Neuro’Day</b> est l’évènement qui réunit les acteurs de <b>l’innovation</b> autour des sujets clés pour le développement de nos organisations : <b>motivation</b>, <b>engagement</b>, <b>fidélisation des talents</b>, qualité de vie et conditions de travail, responsabilité sociétale des entreprises…</span>
                            <span>Notre mission est d’apporter une bonne goutte de fraîcheur dans notre quotidien professionnel et <b>d’impulser une dynamique d’épanouissement pro/perso</b> afin de libérer notre plein potentiel tout en contribuant à l’épanouissement de notre société.</span>
                            <span>Le <b>Neuro’Day</b> nous permet de faire connaître au plus grand nombre d’entreprises et collaborateurs, les dernières tendances et bonnes pratiques. Grâce à la participation <b>d’experts</b>, <b>scientifiques</b>, <b>innovateurs</b> et l'animation <b>d'ateliers ludiques et sensoriels</b>.</span>
                            <span>🧠 Nous vous souhaitons un <b>Neuro’Day</b> pétillant, innovant, inspirant ! Enjoy.</span>
                            <span>***</span>
                            <br/>
                            <span>🍋 Fait avec la beauté du zeste par <a href="https://zenmondrops.com/" target={"_blank"}>Zenmon Drops</a>.</span>
                        </div>
                        <div className={styles.img}>
                            <img src="./drops.png" alt="drops"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'soiree'}>
                <div ref={planning} className={styles.planning}>
                    <p id={styles.textsoiree}>La soirée</p>
                    <div className={inView ? styles.row : styles.disabled}>
                        <div className={styles.event}>
                            <div className={styles.content}><p>17h45 - Accueil</p></div>
                        </div>
                        <img src={'./etoile.svg'} alt={'etoile'}></img>
                        <div className={styles.event}>
                            <div className={styles.content}><p>18h00 - Présentation et remerciements</p></div>
                        </div>
                        <img src={'./etoile.svg'} alt={'etoile'}></img>
                        <div className={styles.event}>
                            <div className={styles.content}><p>18h30 - Table ronde animée par des experts : Hard Skills vs Soft Skills, quels enjeux pour demain ?</p></div>
                        </div>
                        <img src={'./etoile.svg'} alt={'etoile'}></img>
                        <div className={styles.event}>
                            <div className={styles.content}><p>19h30 - Auto-évaluation, mapping individuel et collectif des Soft Skills</p></div>
                        </div>
                        <img src={'./etoile.svg'} alt={'etoile'}></img>
                        <div className={styles.event}>
                            <div className={styles.content}><p>19h45 - Activité neuro-sensorielle et application pratique</p></div>
                        </div>
                        <img src={'./etoile.svg'} alt={'etoile'}></img>
                        <div className={styles.event}>
                            <div className={styles.content}><p>20h00 - Apéritif et musique live</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'speaker'}>
                <div className={styles.title}>
                    <p>Les experts</p>
                </div>
                <div className={styles.speakers}>
                    <div className={styles.items} onMouseEnter={onMarina}
                         onMouseLeave={offMarina}>
                        <img className={hoverMarina ? styles.hovered : ''} src="./marina.jpeg" alt="pierre"/>
                        <div className={styles.infos}>
                            <p>Marina Gravigny</p>
                            <a target="_blank" href="https://www.linkedin.com/in/marina-gravigny-882419123/"><img className={hoverMarina ? '' : styles.hovered} id={styles.link} src="./link.svg" alt="link"/></a>
                            <span>Responsable formation & développement des compétences</span>
                            <img className={hoverMarina ? '' : styles.hovered} src="./credit.png" alt="credit"/>
                        </div>
                    </div>
                    <div className={styles.items} onMouseEnter={onPierre} onMouseLeave={offPierre}>
                        <img className={hoverPierre ? styles.hovered : ''} src="./pierre.jpeg" alt="pierre"/>
                        <div className={styles.infos}>
                            <p>Pierre Bichon</p>
                            <a target="_blank" href="https://www.linkedin.com/in/pierre-bichon-63305b2/"><img className={hoverPierre ? '' : styles.hovered} id={styles.link} src="./link.svg" alt="link"/></a>
                            <span>CTO Edenred</span>
                            <img className={hoverPierre ? '' : styles.hovered} src="./Edenred.png" alt="credit"/>
                        </div>
                    </div>
                    <div className={styles.items} onMouseEnter={onMohamed}
                         onMouseLeave={offMohamed}>
                        <img className={hoverMohamed ? styles.hovered : ''} src="./mohamed.jpeg" alt="mohamed"/>
                        <div className={styles.infos}>
                            <p>Mohamed Jaber</p>
                            <a target="_blank" href="https://www.linkedin.com/in/mohamed-jaber-b380544b/"><img className={hoverMohamed ? '' : styles.hovered} id={styles.link} src="./link.svg" alt="link"/></a>
                            <span>Neurosciences Professor, Inserm research unit Director</span>
                            <img className={hoverMohamed ? '' : styles.hovered} src="./inserm.png" alt="credit"/>
                        </div>
                    </div>
                    <div className={styles.items} onMouseEnter={onOlivier}
                         onMouseLeave={offOlivier}>
                        <img className={hoverOlivier ? styles.hovered : ''} src="./olivier.jpeg" alt="olivier"/>
                        <div className={styles.infos}>
                            <p>Olivier Grosse</p>
                            <a target="_blank" href="https://www.linkedin.com/in/oliviergrosse/"><img className={hoverOlivier ? '' : styles.hovered} id={styles.link} src="./link.svg" alt="link"/></a>
                            <span>Directeur 42 Angoulême</span>
                            <img className={hoverOlivier ? '' : styles.hovered} src="./42.png" alt="credit"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'partenaires'}>
                <div className={styles.partenaires}>
                    <div className={styles.titleins}>
                        <p>Partenaires</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.avatar}>
                            <img src="./p1.png" alt="p1"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p2.png" alt="p2"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p3.png" alt="p3"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p4.png" alt="p4"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p5.png" alt="p5"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p6.png" alt="p6"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p7.png" alt="p7"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p8.png" alt="p8"/>
                        </div>
                        <div className={styles.avatar}>
                            <img src="./p9.png" alt="p9"/>
                        </div><div className={styles.avatar}>
                        <img src="./p10.jpg" alt="p10"/>
                    </div>
                    </div>
                </div>
            </section>
            <section id={'contact'}>
                <div className={styles.contact}>
                    <p>Une question ?</p>
                    <button onClick={clickContact}>CONTACTEZ-NOUS</button>
                </div>
            </section>
            <section id={'inscription'}>
                <div className={styles.inscription}>
                    <div className={styles.titleins}>
                        <p>Inscription</p>
                    </div>
                    <a href="https://7fdb0f32.sibforms.com/serve/MUIFAJHRvZcFYDJkq9RuAixNbTfw6Rf2Z_8WzraHw7GGsY4VfKnyzAOfihPsfHW2YFC4JZrJKXwak2ZpPAJjkWPxm2UWxo6M7NQY9WbVA_qGrB_GufcbjqTyyDTO8FclHiUFES4fIE1j5ttewoTNYxDuJ1H-meqHogmKoUrbRTVU7XYPBshJwOTnD5B3Np4GrEUya3jEDJx9A5iW" target={"_blank"}>
                        <div className={styles.button}>
                            <p>Je m'inscris</p>
                        </div>
                    </a>
                    <div className={styles.localisation}>
                        <div className={styles.items}>
                            <img src="./02.png" alt="email"/>
                            <p>Email: contact@zenmondrops.com</p>
                        </div>
                        <div className={styles.items}>
                            <img src="./03.png" alt="email"/>
                            <p>Adresse: Crédit Agricole, 30 Rue d'Epagnac, 16800 Soyaux</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};


export default HomePage;