import React from 'react';
import './../App.css';
import SvgSkills from "../assets/Skills"
import LottieSkills from '../assets/skills/lottieSkills';

function Skills() {
  return (
    <>
      <div className='skills'>
        <div className='skillsContainer'>
          <div className='skillsTitle'>
            <h2 className='h2'>SKILLS</h2>
            <LottieSkills speed={0.1} />
          </div>
          <div className='code'>

          </div>
          <div className='code'>

          </div>
          <div className='code'>

          </div>
        </div>

      </div>
    </>
  );
}

export default Skills;