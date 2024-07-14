import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import java from '../assets/svg/skills/java.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import node from '../assets/svg/skills/node.svg'
import express from '../assets/svg/skills/express.svg'
import jenkins from '../assets/svg/skills/jenkins.svg'
import kubernetes from '../assets/svg/skills/kubernetes.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'nextjs':
            return nextJS;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind css':
            return tailwind;
        case 'java':
            return java;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'node.js':
            return node;
        case 'express':
            return express;
        case 'jenkins':
            return jenkins;
        case 'kubernetes':
            return kubernetes;
        default:
            break;
    }
}
