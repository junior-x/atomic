import React from 'react';
import './../App.css';
// import SvgHackintoshDiv from "./../assets/HackintoshDiv";
import ProfileUser from '../components/profileUser';

function Hackintosh() {
    return (
        <>
            <div className="fullBar">
                <div className='barG'></div>
                <div className='barY'></div>
                <div className='barO'></div>
                <div className='barR'></div>
                <div className='barP'></div>
                <div className='barB'></div>
            </div>
            {/* <SvgHackintoshDiv /> */}
            <ProfileUser />
        </>
    );
}

export default Hackintosh;