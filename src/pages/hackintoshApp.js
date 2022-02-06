import React from 'react';
import './../App.css';
import Jupiter from './juptierDiv';
import Xp from './xpDiv';
import Education from './educationDiv';
import HackintoshJunior from './hackingtoshJunior';
import ProfileUser from '../components/profileUser';

function Hackintosh() {
    return (
        <>
            <div className='body'>
                <HackintoshJunior />
                <ProfileUser />
                <Jupiter />
                <Xp />
                <Education />
            </div>
        </>
    );
}

export default Hackintosh;