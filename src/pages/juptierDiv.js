import React from 'react';
import './../App.css';
import SvgAboutMe from '../assets/AboutMe';
import MousePng from "./../assets/mouse.png"

function Jupiter() {
  return (
    <>
      <div>
          <div style={{
              height: '210px', 
              backgroundColor: '#837fb1', 
              display: 'flex', 
              width: '100%', 
              alignItems: 'center', 
              justifyContent: 'center'}}
            >
            <img src={MousePng} style={{height: '27%'}} ></img>
          </div>
          <div style={{
              height: '210px', 
              backgroundColor: '#837fb1', 
              display: 'flex', 
              width: '100%', 
              }}
            >
          </div>
          <SvgAboutMe />
      </div>

    </>
  );
}

export default Jupiter;
