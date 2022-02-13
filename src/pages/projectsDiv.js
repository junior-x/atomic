import React from "react";
import LottiePacman from "../assets/pacman/lottiePacman";
import './../App.css';

export default function ProjectsDiv() {
    
    return(
        <>
            <div className="projectsDiv">
                <div className="projectsTitle">☂️ Projects</div>
                <div>
                    <div></div>
                    <div className="projectsPacman"><LottiePacman/></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

