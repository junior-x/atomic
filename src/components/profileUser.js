import "./../App.css"
import AppleLogo from "./../assets/appleLogo.png"

function ProfileUser() {
    return (
        <div className="hack">
            <div >
                <div className="actionMac" >
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                </div>
                <img src={AppleLogo} class="grid-3"></img>
                <div class="grid-9">
                    <div style={{width: '21%'}}>Hackintosh</div>
                    <div style={{color: "rgba(0, 0, 0, 0.21)", width: '36%'}}>/ Junior</div>
                </div>
                <div class="grid-8">Developer</div>
                <div class="skillsButton">
                    <button class="stylesButton animationButton">UI/UX</button>
                    <button class="stylesButton">JAVASCRIPT</button>
                    <button class="stylesButton">MOTION</button>
                    <button class="stylesButton">REACTJS</button>
                    <button class="stylesButton">PYTHON</button>
                    <button class="stylesButton">PHP</button>
                </div>
                <div className="hackinLine" ><div className="decoration"></div></div>
            </div>
            <div className="spacer" ></div>
        </div>
    );
}

export default ProfileUser;
