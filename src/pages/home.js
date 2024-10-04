import * as React from 'react';
import logo from '../icons/logo.svg';
import mountains from '../icons/mountains.png';
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
                    <div className={styles.textContainer}>
                        <text className={styles.profileTextTop}>Sebastian</text>
                        <text className={styles.profileTextBot}>Guo</text>
                    </div>
                    <img src={profile} className={styles.profilePicture} alt="profile" />
                </div>           
                <img src={mountains} className={styles.introPicture} alt="background"/>
            </div>
            <footer className={styles.mainFooter}>
                <text className={styles.footerReactText}>Built with React</text>
                <img src={logo} className={styles.reactLogo} alt="logo" />
            </footer>
        </div>
    );
}   

export default Home;