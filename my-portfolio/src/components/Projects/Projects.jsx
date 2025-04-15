import React from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import beebliotheek1Image from '../../assets/images/beebliotheek1.png';
import cvImage from '../../assets/images/cv.png'
import kamersmetaandacht1Image from '../../assets/images/kamersmetaandacht1.png'


const projectsData = [
    {
        id: 1,
        title: 'Beebliotheek',
        description: 'Een app gemaakt tijdens een capacity buildings traject. Samen met mijn medestudenten hebben we een webapplicatie ontwikkeld met Angular. ',
        image: beebliotheek1Image,
        tags: ['Angular', 'API', 'TypeScript', 'SCSS', 'GIT/GITHUB', 'Frontend Development'],
        codeLink: 'https://github.com/CKablau/Beebliotheek',
    },
    {
        id: 2,
        title: 'Kamers met Aandacht',
        description: 'Als junior frontend developer bij Bee werkte ik aan het project Kamers met Aandacht. Dit platform biedt een innovatieve oplossing voor jongeren die op zoek zijn naar een veilige woonplek en een betrokken omgeving. Mijn rol in dit project draait om het creëren van een intuïtieve en aantrekkelijke gebruikerservaring.',
        image: kamersmetaandacht1Image,
        tags: ['Angular', 'User Experience Design', 'TS', 'SCSS', 'GIT/GITHUB', 'Frontend Development'],
    },
    {
        id: 3,
        title: 'CV Website',
        description: 'Als project voor mezelf ontwikkelde ik een cv-website om mijn werkervaring, opleidingen en vaardigheden professioneel en overzichtelijk te presenteren. Hierbij verfijnde ik mijn frontend skills in HTML, CSS en JavaScript. ',
        image: cvImage,
        tags: ['HTML5', 'CSS', 'JavaScript' ],
        liveLink: 'https://anne-bee.github.io/CV-NL/',
        codeLink: 'https://github.com/Anne-Bee/CV-NL/tree/master',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>My Projects</h2>
                    <p>Here are some of my projects. Feel free to check them out</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;