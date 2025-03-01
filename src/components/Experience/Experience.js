import React,{useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import AnimationLottie from '../helper/animation-lottie';
import lottieFile from '../../assets/experience.json'

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                 <AnimationLottie animationPath={lottieFile} />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
