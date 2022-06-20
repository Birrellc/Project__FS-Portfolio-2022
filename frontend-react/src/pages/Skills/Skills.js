import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';

import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id='skills' className='app-container skills-section '>
      <RoughNotation type='highlight' show={true} color='black' padding={15}>
        <h2 className='head-text white'>
          My <span className='yellow'>Skills</span>
        </h2>
      </RoughNotation>

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
              <p className='p-text white'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
