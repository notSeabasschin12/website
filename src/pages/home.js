import * as React from 'react';
import logo from '../icons/logo.svg';
import mountains from '../icons/mountains.png';
import intro from '../icons/intro_picture.png';
import profile from '../icons/profile.png';
import styles from '../styling/main.module.css';

        
function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.mainbody}>
            {/* <div className={styles.mainheader}> */}
                
                {/* <div className={styles.mainNavigationLinks}>
                <a href="./main.js">Home</a>
                <a href="./blog.js">Blog</a>
                <a href="./projects.js">Projects</a>
                <a href="./about.js">About</a>
                </div> */}
                {/* <div className={styles.personalLinks}> */}
                {/* <Email/> */}
                {/* </div> */}
            {/* </div> */}
                <div className={styles.profileTextContainer}>
                    <img src={profile} className={styles.profilePicture} alt="profile" />
                    <div className={styles.textContainer}>
                        <text className={styles.profileTextTop}>Sebastian</text>
                        <text className={styles.profileTextBot}>Guo </text>
                        <img alt="Google (Noto Color Emoji 15.1)" srcset="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f422.png 2x, https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/512px/1f422.png 1x" className={styles.profileTurtle} data-index="0" src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f422.png"></img>
                    </div>
                </div>           
                <div className={styles.introductionTextContainer}>
                    <div className={styles.introBox}>
                        <text className={styles.introTextTitle}>About Me</text>
                        <text className={styles.introText}>Welcome to my website. I'm Sebastian, a data scientist at AT&T. I work with geo-spatial climate data to help AT&T better understand the risks natural disasters will have on network infrastructure and to decide which areas require increased climate resiliency assistance. I studied at Cornell University in Ithaca, New York where I got my B.A. in Computer Science and a minor in Climate Change. </text>
                    </div>
                    <img src={intro} className={styles.introPicture} alt="background"/>
                </div>
            </div>
            <footer className={styles.mainFooter}>
                <text className={styles.footerReactText}>Built with React</text>
                <img src={logo} className={styles.reactLogo} alt="logo" />
            </footer>
        </div>
    );
}   

export default Home;