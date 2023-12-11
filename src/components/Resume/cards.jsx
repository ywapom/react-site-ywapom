import React, { Component } from "react";
import styles from "./Cards.module.css";

class MyCards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.intro}>
                    <text>Resume</text>
                    <h3>Software  Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.span1}> Test Automation &nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.span2}>Full Stack Development</span></h3>
                    <br></br>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3><i>Tivo (Rovi) </i><span>Digital media solutions</span></h3>
                        <p style={{ color: 'teal' }}>Principal QA Engineer [2009-2017]</p>
                        <p>C#, Java, Ruby, SQL, Bash, Jmeter, SoapUI</p>
                        <img src="../images/rovi.png" alt="" />
                        <p>Coded multi-tiered multi-platform e2e automation.  Lead 6 QA Engineers.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Conduce Inc. </i><span> Real-time IOT supply chain and warehouse visualizations. </span></h3>
                        <p style={{ color: 'teal' }}>Lead QA Engineer [2017-2018]</p>
                        <p>Python, Jenkins, Github, CI/CD pipeline</p>
                        <img src="../images/conduce.png" alt="" />
                        <p>Automated testing of the Conduce API and web frontend.  Lead 3 Engineers.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>AssetSmart </i><span> Asset Management Solutions.</span></h3>
                        <p style={{ color: 'teal' }}>SDET [2018-2022]</p>
                        <p>C#, asp.net, SQL, Selenium, JQuery, Javascript</p>
                        <img src="../images/assetsmart.png" alt="" />
                        <p>Data driven automation of massive enterprise application.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Meta (Facebook) </i><span>Under contract from Q Analysts</span></h3>
                        <p style={{ color: 'teal' }}>Test Automation Scripter [2022-2023]</p>
                        <p>React, Jest-e2e</p>
                        <img src="../images/meta.png" alt="" />
                        <p>Custom jest-e2e test automation across and between mobile, desktop, and web.</p>
                    </div>
                    <div className={styles.card}>
                        <h3><i>Meta (Facebook) </i><span>Under contract from Qualitest Group</span></h3>
                        <p style={{ color: 'teal' }}>VR Tools Developer [2023-]</p>
                        <p>Python, Javascript, Renderdoc, Perfetto, Android on Oculus</p>
                        <img src="../images/vr.jpeg" alt="" />
                        <p>Automated test framework creation for Oculus</p>
                    </div>
                </div >
            </React.Fragment>

        );
    }
}

export default MyCards;