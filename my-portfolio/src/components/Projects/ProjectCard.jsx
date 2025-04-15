import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project}) => {
    const { title, description, image, tags, liveLink, codeLink } = project;

    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <div className="project-links">
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        )}
                        {codeLink && (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;