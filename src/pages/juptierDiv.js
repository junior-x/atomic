import React, { useEffect, useState } from 'react';
import './../App.css';
import MousePng from "./../assets/mouse.png"
import ActionMac from '../components/actionMac';
import LottieJupiter from './../assets/jupiter/lottieJupiter';
import LottieMouse from './../assets/mouse/lottieMouse';
import JuniorPic from "./../assets/JuniorPic.png"
import LottieWaves from '../assets/waves/lottieWaves';
import { GiFallingStar } from 'react-icons/gi';
import { BiCode, BiCoffee } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

function Jupiter() {

  return (
    <>
      <div className='jupiter'>
        {/* <div className='jupiterMouseSpace' >
          <img src={MousePng} style={{ height: '21%', width: '1.5%' }} ></img>
        </div> */}

        <div className='jupiterWindows'>
          <div className='jupiterWindowsScreen'>
            <div style={{paddingRight: '30%'}}>
            <ActionMac />
            </div>
            <LottieJupiter speed={0.1} />
          </div>
        </div>

        <div className='jupiterMouseSpace' >
          <LottieMouse/>
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
        <div className='codeDiv'>
          <div className='codeGroup'>
            <div className='codeJs'><h3 style={{margin: '21px', fontSize: '15px', color: "rgba(0 0 0 0)"}}><em>% Javascript</em></h3></div>
            <div className='codeReact'><h3 style={{margin: '21px', fontSize: '15px', color: "rgba(0 0 0 0)"}}><em>% React</em></h3></div>
            <div className='codeSass'><h3 style={{margin: '21px', fontSize: '15px', color: "rgba(0 0 0 0)"}}><em>% Sass</em></h3></div>
            <div className='codeNext'><h3 style={{margin: '21px', fontSize: '15px', color: "rgba(0 0 0 0)"}}><em>% NextJS</em></h3></div>
            <div className='codeSupabase'><h3 style={{margin: '21px', fontSize: '15px', color: "rgba(0 0 0 0)"  }}><em>% Supabase</em></h3></div>
          </div>
        </div>
        <div className='projectIconsAbout' >
          <div className='projectIconsAboutDiv' >
            <div><GiFallingStar /><h1 style={{ paddingTop: '30px', fontSize: '24px' }} >047</h1><h3 style={{ fontSize: '18px' }}>Projects</h3></div>
            <div><BiCoffee /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>936</h1><h3 style={{ fontSize: '18px' }} >Coffees</h3></div>
            <div><BiCode /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>009</h1><h3 style={{ fontSize: '18px' }} >Code</h3></div>
            <div><FaGithub /><h1 style={{ paddingTop: '30px', fontSize: '24px' }}>Hello</h1><h3 style={{ fontSize: '18px' }} >Something</h3></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jupiter;
