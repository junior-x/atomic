import React from 'react';
import './../App.css';
import LottieSkills from './../assets/skills/lottieSkills';
import { AnimateSharedLayout } from "framer-motion";
import CardsGroup from '../components/cards';
import ProfileUser from '../components/profileUser';

export default function Skills() {

  return (
    <AnimateSharedLayout >
      <div className='skills'>
        <div className='skillsContainer'>
          <div className='skillsTitle'>
            <LottieSkills speed={0.1} />
            <h2 className='h2'>SKILLS</h2>
            <ProfileUser />
            <CardsGroup/>
          </div>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}