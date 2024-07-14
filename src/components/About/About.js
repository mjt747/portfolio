import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import AnimationLottie from '../helper/animation-lottie';
import lottieFile from '../../assets/about.json'

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}
                    <br/><br/>{aboutData.description3}<br/> <br/>{aboutData.description4}</p>
                </div>
                <div className="about-img">
                <AnimationLottie animationPath={lottieFile} />
                </div>
            </div>
        </div>

    )
}

export default About
