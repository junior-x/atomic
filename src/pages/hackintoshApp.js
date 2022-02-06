import React from 'react';
import './../App.css';
import Jupiter from './juptierDiv';
import Skills from './skillsDiv';
import Education from './educationDiv';
import HackintoshJunior from './hackingtoshJunior';
import ProfileUser from '../components/profileUser';

function Hackintosh() {
    return (
        <>
            <div className='container' >
                <div style={{height: '150px'}}></div>
                <HackintoshJunior />
                <ProfileUser />
                <Jupiter />
                <Skills />
                <Education />
            </div>
        </>
    );
}

export default Hackintosh;