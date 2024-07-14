import canteen from '../assets/svg/projects/canteen.svg'
import healthify from '../assets/healthify.gif'
import seer from '../assets/seer.gif'
import drive from '../assets/drive.gif'
import voice from '../assets/voice.gif'
import calculator from '../assets/calculator.gif'


export const projectsData = [
    {
        id: 1,
        projectName: 'Canteen Automation System',
        projectDesc: 'The aim of this project is to develop an automated canteen ordering system. Two different login options available for users and admin. ',
        tags: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
        code: 'https://github.com/ManavTanna/Canteen-Automation-System',
        demo: 'https://canteenprj.web.app/',
        image: canteen
    },
    {
        id: 2,
        projectName: 'Healthify',
        projectDesc: 'This project aims to help user detect his ailment from the symptoms he faces. Home remedies are suggested, and also nearby clinics are shown to help the user get treated earliest.',
        tags: ['NextJS', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
        code: 'https://github.com/ManavTanna/Healthify',
        image: healthify
    },
    {
        id: 3,
        projectName: 'Analysis of the SEER database',
        projectDesc: 'This project is in collaboration with Tata Memorial Cancer Hospital. It is an ML based DSS to treat cancer patients under Head and Neck category.',
        tags: ['SEER software', 'ML algorithms', 'Deep Learning algorithms'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: seer
    },
    {
        id: 4,
        projectName: 'Drowsiness Detection',
        projectDesc: 'A ML-based project which continuously scans the face of the driver and alerts them if found drowsy. A SMS is also sent to the company.',
        tags: ['Flask', 'OpenCV', 'HTML', 'Python'],
        code: 'https://github.com/ManavTanna/Drowsiness-detection',
        image: drive
    },
    {
        id: 5,
        projectName: 'Voice Assistant',
        projectDesc: 'A desktop app which can perform tasks like searching something on Google or playing songs, etc by responding to users voice commands. ',
        tags: ['PyQT5', 'PYTTSX3'],
        code: 'https://github.com/ManavTanna/VoiceAssistant',
        image: voice
    },
    {
        id: 6,
        projectName: 'Calculator',
        projectDesc: 'A calculator made using React for carrying out simple arithematic operations',
        tags: ['React'],
        code: 'https://github.com/ManavTanna/React-calculator',
        demo: 'https://react-calculator-rose.vercel.app/',
        image: calculator
    },
]


