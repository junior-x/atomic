import React from 'react';
import './../App.css';
import MousePng from "./../assets/mouse.png"
import ActionMac from '../components/actionMac';
import LottieJupiter from './../assets/jupiter/lottieJupiter';
import JuniorPic from "./../assets/JuniorPic.png"
import { FaJs, FaFigma, FaSass, FaApple, FaReact, FaGithub } from 'react-icons/fa';
import { BiCoffee, BiCode } from 'react-icons/bi';
import { GiFallingStar } from 'react-icons/gi';
import LottieWaves from '../assets/waves/lottieWaves';

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
            <LottieJupiter speed={0.1} />
          </div>
        </div>

        <div className='jupiterAboutMe'>
          <h1>ABOUT ME</h1>
          <LottieWaves speed={0.5} />
          <div className='jupiterAboutJunior'>
            <img src={JuniorPic} style={{
              margin: '30px',
              padding: '60px'
            }} class="grid-3"></img>
            <p className='jupiterJuniorText'  > Entusiásta da astronomia, fisica e tecnologia, dedico minhas energias em desenvolvimento de software voltado ao front-end e motion design através do Javascript, PHP e SASS. Vivo criando projetos com temas em astronomia o que me leva a mexer um pouco com Python aumentando o interesse em Ciência de Dados e um dia ser capaz de criar um app para a NASA. </p>
          </div>
        </div>
        <div className='iconsAbout' >
          <div className='iconsAboutDiv' >
            <div><GiFallingStar /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>009</h1><h3 style={{ fontSize: '18px' }}>Projects</h3></div>
            <div><BiCoffee /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>009</h1><h3 style={{ fontSize: '18px' }} >Coffees</h3></div>
            <div><BiCode /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>009</h1><h3 style={{ fontSize: '18px' }} >Code</h3></div>
            <div><FaGithub /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>009</h1><h3 style={{ fontSize: '18px' }} >Something</h3></div>
          </div>
        </div>
        <h3 style={{  paddingTop: '270px'}}>project developed with</h3>
        <div className='icons' >
          <div className='iconsDiv' ><FaJs /><FaFigma /><FaSass /> <FaApple /> <FaReact /> <FaGithub /></div>
        </div>

      </div>
    </>
  );
}

export default Jupiter;
