import React from 'react';
import { Reveal } from '../Motion';
import { useState } from 'react';
import {
    Container,
    Wrapper,
    Title,
    Desc,
    CardContainer,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Reveal as={Title} className="section-title">Projects</Reveal>
                <Reveal as={Desc} delay={80}>
                    I have worked on a wide range of projects. From web apps to android apps. Here
                    are some of my projects.
                </Reveal>
                <Reveal as={ToggleButtonGroup} delay={160} role="group" aria-label="Project category">
                    <ToggleButton $active={toggle === 'all'} aria-pressed={toggle === 'all'} onClick={() => setToggle('all')}>
                        All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton $active={toggle === 'web app'} aria-pressed={toggle === 'web app'} onClick={() => setToggle('web app')}>
                        WEB APP'S
                    </ToggleButton>
                </Reveal>
                <Reveal as={CardContainer} className="project-grid" key={toggle}>
                    {projects.filter(project => toggle === 'all' || project.category === toggle).map((project, index) => (
                        <ProjectCard key={project.id} project={project} delay={(index % 3) * 90} setOpenModal={setOpenModal} />
                    ))}
                </Reveal>
            </Wrapper>
        </Container>
    );
};

export default Projects;
