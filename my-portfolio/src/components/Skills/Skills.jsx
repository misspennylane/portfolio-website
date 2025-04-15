import React from "react";
import './Skills.scss';

const Skills = () => {
    // Group skills by category
    const skillsData = {
        frontend: [
            { name: 'HTML5', level: 75 },
            { name: 'CSS3', level: 70 },
            { name: 'JavaScript', level: 40 },
            { name: 'TypeScript', level:45 },
            { name: 'React', level: 25 },
            { name: 'Angular', level: 65 },
            { name: 'SASS/SCSS', level: 65 },
        ],
        tools: [
            { name: 'Git', level: 75 },
            { name: 'npm', level: 60 },
            { name: 'Figma', level: 65 },
            { name: 'VS Code', level: 85 },
            { name: 'Webstorm', level: 75},
        ],
        other: [
            { name: 'Responsive Design', level: 60 },
            { name: 'Testing', level: 55 },
            { name: 'Scrum', level: 60},
            { name: 'Basic SEO', level: 40}
        ],
    };

    const renderSkills = (skills)  => {
        return skills.map((skill, index) => (
            <div className="skill" key={index}>
                <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                    <div className="skill-progress"
                         style={{ width: `${skill.level}%`}}
                         data-level={skill.level}>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>My Skills</h2>
                    <p>Dit zijn mijn tot nu toe opgedaande skills</p>
                </div>

                <div className="skills-container">
                    <div className="skills-category">
                        <h3>Frontend Development</h3>
                        <div className="skills-list">
                            {renderSkills(skillsData.frontend)}
                        </div>
                    </div>
                    <div className="skills-category">
                        <h3>Tools & Technologies</h3>
                        <div className="skills-list">
                            {renderSkills(skillsData.tools)}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Other Skills</h3>
                        <div className="skills-list">
                            {renderSkills(skillsData.other)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;