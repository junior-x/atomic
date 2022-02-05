import React from 'react';
import './../App.css';
import Jupiter from './juptierDiv';
import Xp from './xpDiv';
import Education from './educationDiv';
import HackintoshJunior from './hackingtoshJunior';

function Hackintosh() {
    return (
        <>
            <HackintoshJunior />
            <Jupiter />
            <Xp />
            <Education />
        </>
    );
}

export default Hackintosh;