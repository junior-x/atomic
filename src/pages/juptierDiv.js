import React from 'react';
import './../App.css';
import MousePng from "./../assets/mouse.png"
import ActionMac from '../components/actionMac';
import LottieJupiter from './../assets/jupiter/lottieJupiter';
import { FaJs, FaFigma, FaSass, FaApple, FaReact, FaGithub } from 'react-icons/fa';

function Jupiter() {
  return (
    <>
      <div className='jupiter'>
        <div className='jupiterMouseSpace' >
          <img src={MousePng} style={{ height: '21%', width: '1.5%' }} ></img>
        </div>

        <div className='jupiterWindows'>
          <div className='jupiterWindowsScreen'>
            <ActionMac />
            <LottieJupiter speed={0.5} />
          </div>
        </div>

        <div >
          <h1>ABOUT ME</h1>
          <p> Entusiásta de astronomia, fisica e tecnologia, dedico minhas energias em desenvolvimento de software voltado ao front-end e motion design através do Javascript, PHP e SASS. Vivo criando projetos com temas em astronomia o que me leva a mexer um pouco com Python aumentando o interesse em Ciência de Dados e um dia ser capaz de criar um app para a NASA.</p>
        </div>

        <h3>project developed with</h3>
        <div className='icons' >
          <div className='iconsDiv' ><FaJs /><FaFigma /><FaSass /> <FaApple /> <FaReact /> <FaGithub /></div>
        </div>

      </div>
    </>
  );
}

export default Jupiter;
