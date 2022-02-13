import React from "react";
import "./../App.css";
import { BiCode } from 'react-icons/bi';
import { FaFigma, FaGithub } from 'react-icons/fa';
import { IoMdPlanet } from 'react-icons/io';

export default function NavBar() {
    return (
        <>
            <div className="navBar">
                <div className="navBarDiv">
                    <div className="navBarLogo">
                        <div className="navBarIcons"><IoMdPlanet /></div>
                    </div>
                    <div style={{width: '100%'}}></div>
                    <div className="navBarSocial">
                        <div className="navBarIconsFigma"><FaFigma /></div>
                        <div className="navBarIcons"><BiCode /> </div>
                        <div className="navBarIconsGithub"><FaGithub /></div>
                    </div>
                </div>
            </div>
        </>
    );
}