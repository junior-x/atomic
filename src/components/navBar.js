import React from "react";
import "./../App.css";
import { SiBehance } from 'react-icons/si';
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
                        <div className="navBarIconsFigma"><FaFigma  onClick={() => window.open("https://www.figma.com/@juniorx" )} /></div>
                        <div className="navBarIcons"><SiBehance onClick={() => window.open("https://github.com/junior-x")} /> </div>
                        <div className="navBarIconsGithub"><FaGithub onClick={() => window.open("https://github.com/junior-x")}  /></div>
                    </div>
                </div>
            </div>
        </>
    );
}