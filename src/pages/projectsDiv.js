import React from "react";
import LottieBadcode from "../assets/badcode/lottieBadcode";
import LottieHackintosh from "../assets/hackintosh/LottieHackintosh";
import LottiePacman from "../assets/pacman/lottiePacman";
import './../App.css';

export default function ProjectsDiv() {
    
    return(
        <>
            <div className="projectsDiv">
                <div className="projectsTitle">Projects</div>
                <div className="projectsList">
                    <div className="projectsHackintosh">
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}  onClick={() => window.open("https://hackintosh-one.vercel.app/")}>
                            <LottieHackintosh/>
                            <h3>HACKINTOSH</h3>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}  onClick={() => window.open("https://pac-man-site.vercel.app/")} >
                            <LottiePacman />
                            <h3>PAC-MAN THEME</h3>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}  onClick={() => window.open("https://bad-code.vercel.app/")}>
                            <LottieBadcode />
                            <h3>BAD-CODE CHAT</h3>
                        </div>
                    </div>
                    {/* <div className="projectsPacman"><LottiePacman/></div>
                    <div className="projectsBadCode"></div> */}
                </div>
            </div>
        </>
    );
}

