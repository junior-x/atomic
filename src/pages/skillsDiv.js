import React from 'react';
// import SkillsList from '../components/skillsList';
import './../App.css';
import LottieSkills from './../assets/skills/lottieSkills';
import { AnimateSharedLayout } from "framer-motion";
// import SkillsCards from '../components/skillsCards';
import CardsGroup from '../components/cards';


export default function Skills() {

  return (
    <AnimateSharedLayout >
      <div className='skills'>
        <div className='skillsContainer'>
          <div className='skillsTitle'>
            <h2 className='h2'>SKILLS</h2>
            <LottieSkills speed={0.1} />
            {/* <SkillsList /> */}
            <CardsGroup/>

          </div>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}