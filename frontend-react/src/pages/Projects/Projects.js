import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className='app-container'>
      <h2 className='head-text'>
        My <span>Portfolio</span>
      </h2>

      <div className='app-work-filter'>
        {['Website', 'UI/UX', 'Small Project', 'All'].map((item, i) => (
          <div
            key={i}
            onClick={() => handleWorkFilter(item)}
            className={`app-work-filter-item app-flex p-text ${
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
        className='app-work-portfolio'
      >
        {filterWork.map((work, i) => (
          <div className='app-work-item app-flex' key={i}>
            <div className='app-work-img app-flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  staggerChildren: 0.7,
                }}
                className='app-work-hover app-flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.3 }}
                    className='app-flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
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

            <div className='app-work-content app-flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className='app-work-tag app-flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
