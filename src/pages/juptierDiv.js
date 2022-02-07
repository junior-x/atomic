import React from 'react';
import './../App.css';
import MousePng from "./../assets/mouse.png"
import ActionMac from '../components/actionMac';

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
          </div>
        </div>

        <div >
          <h1 style={{display: 'flex', textAlign:'center', justifyContent: 'center', paddingTop: '210px', color: 'white', fontSize: '63px'}}>ABOUT ME</h1>
          <p style={{display: 'flex', textAlign:'center', justifyContent: 'center', padding: '210px', color: 'white', fontSize: '27px'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

      </div>
    </>
  );
}

export default Jupiter;
