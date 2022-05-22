import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [Projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleprojectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProjects(Projects);
      } else {
        setFilterProjects(
          Projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <div className='app-container app-flex projects-section'>
      <RoughNotation type='highlight' show={true} color='black' padding={15}>
        <h2 className='head-text white'>
          Recent <span className='cyan'>Projects</span> <br />
        </h2>
      </RoughNotation>

      <div className='app-project-filter'>
        {['Website', 'Small Project', 'All'].map((item, i) => (
          <div
            key={i}
            onClick={() => handleprojectFilter(item)}
            className={`app-project-filter-item app-flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app-project-portfolio'
      >
        {filterProjects.map((project, i) => (
          <div className='app-project-item app-flex' key={i}>
            <div className='app-project-img app-flex'>
              <img src={urlFor(project.imgUrl)} alt={project.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  staggerChildren: 0.7,
                }}
                className='app-project-hover app-flex'
              >
                <a href={project.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.3 }}
                    className='app-flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app-flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app-project-content app-flex'>
              <h4 className='bold-text'>{project.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className='app-project-tag app-flex'>
                <p className='p-text'>{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <button>
        <a
          href='https://github.com/birrellc'
          target='_blank'
          rel='noreferrer'
          class='white uppercase'
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.8] }}
            transition={{ duration: 0.3 }}
            className='app-flex'
          >
            More Projects Here!
          </motion.div>
        </a>
      </button>
    </div>
  );
};

export default Projects;
