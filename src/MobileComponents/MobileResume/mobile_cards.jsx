import React, { Component } from "react";
import styles from "./MobileCards.module.css";

const borderStyle = {
    border: '1px solid black',
    textAlign: 'center',
    marginRight: 10,
  };

class MobileMyCards extends Component {
      
    render() {
        return (
            <React.Fragment>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Ron Hermansen</h3>
                        <img className={styles.img} src="../images/rtw_me.jpeg" alt=""></img>
                    </div>
                    <div className={styles.card}>
                        <h3>Test Automation Specialist</h3>
                        <h3>Full Stack Developer</h3>
                        <h3>Prompt Engineer</h3>
                        <h4>Certified in Machine Learning & Artificial Intelligence</h4>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Meta (Facebook) </i><span>Under contract from Qualitest Group</span></h3>
                        <p style={{ color: 'teal' }}>VR Tools Developer [2023]</p>
                        <p>Python, Javascript, Renderdoc, Perfetto, Android on Oculus</p>
                        <img src="../images/vr.jpeg" alt="" />
                        <p>Automated test framework creation for Oculus</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Meta (Facebook) </i><span>Under contract from Q Analysts</span></h3>
                        <p style={{ color: 'teal' }}>Test Automation Scripter [2022-2023]</p>
                        <p>React, Jest-e2e</p>
                        <img src="../images/meta.png" alt="" />
                        <p>Custom jest-e2e test automation across and between mobile, desktop, and web.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>AssetSmart </i><span> Asset Management Solutions.</span></h3>
                        <p style={{ color: 'teal' }}>SDET [2018-2022]</p>
                        <p>C#, asp.net, SQL, Selenium, JQuery, Javascript</p>
                        <img src="../images/assetsmart.png" alt="" />
                        <p>Data driven automation of massive enterprise application.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Conduce Inc. </i><span> Real-time IOT supply chain and warehouse visualizations. </span></h3>
                        <p style={{ color: 'teal' }}>Lead QA Engineer [2017-2018]</p>
                        <p>Python, Jenkins, Github, CI/CD pipeline</p>
                        <img src="../images/conduce.png" alt="" />
                        <p>Automated testing of the Conduce API and web frontend.  Lead 3 Engineers.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Tivo (Rovi) </i><span>Digital media solutions</span></h3>
                        <p style={{ color: 'teal' }}>Principal QA Engineer [2009-2017]</p>
                        <p>C#, Java, Ruby, SQL, Bash, Jmeter, SoapUI</p>
                        <img src="../images/rovi.png" alt="" />
                        <p>Coded multi-tiered multi-platform e2e automation.  Lead 6 QA Engineers.</p>
                    </div>
                
                <div className={styles.card}>
                    <p className={styles.p1} style={{ color: 'navy' }}>"...contributed greatly to the quality and supportability of our highly complex enterprise application suite."</p>
                    <p className={styles.p1}>&nbsp;&nbsp;&nbsp;-- Christopher Cambell, CEO at AssetSmart</p>
                    <p className={styles.p1} style={{ color: 'navy' }}>"Ron is a highly intelligent, motivated, and creative problem solver... I have no hesitation in recommending him to anyone."</p>
                    <p className={styles.p1}>&nbsp;&nbsp;&nbsp;-- Richard Piedra, Director of Quality Assurance at Conduce</p>
                    <p className={styles.p1} style={{ color: 'navy' }}>"...he excelled in writing automation and test tools to reduce testing time and increase coverage."</p>
                    <p className={styles.p1}>&nbsp;&nbsp;&nbsp;--Paul Davis, Director of Engineering at Rovi</p>
                </div>
                <div className={styles.card}>
                    <p>Awards at Meta:</p>
                    <img className={styles.img} src="../images/badges.png" alt=""/>
                </div>
                <div className={styles.card}>
                    <a style={borderStyle} href ='mailto:rth333@gmail.com'>
                            rth333@gmail.com
                        </a>
                    <a style={borderStyle} href="https://www.linkedin.com/in/ron-hermansen-6b082011/">LinkedIn</a>
                </div>
                </div >
                <br></br>
            </React.Fragment>
        );
    }
}

export default MobileMyCards;