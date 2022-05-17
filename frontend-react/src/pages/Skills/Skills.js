import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className='app-container skills-section '>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app-skills-container'>
        <motion.div className='app-skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app-skills-item app-flex'
              key={skill.name}
            >
              <div
                className='app-flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app-skills-exp padding'>
          {experiences.map((experience) => (
            <motion.div className='app-skills-exp-item' key={experience.year}>
              <div className='app-skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app-skills-exp-projects'>
                {experience.projects.map((project, i) => (
                  <div key={i}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app-skills-exp-project'
                      data-tip
                      data-for={project.name}
                      key={project.name}
                    >
                      <h4 className='bold-text'>{project.name}</h4>
                      <p className='p-text'>{project.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={project.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {project.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
