import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css'
import EducationCard from './EducationCard';
import AnimationLottie from "../helper/animation-lottie";
import lottieFile from '../../assets/education.json';
import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            grade={(edu.id==1)?`CGPA: ${edu.CGPA}`: `Percentage: ${edu.Percentage}`}
                        />
                    ))}
                </div>
                <div className="education-image">
                <AnimationLottie animationPath={lottieFile} />
                </div>
            </div>
        </div>
    )
}

export default Education
