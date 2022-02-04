import "./../styles/profileStyles.css"

function ProfileUser() {
    return (
        <div class="body">
            <div class="container">
                <div class="grid-3"><div style={{ flex: 1, height: "180px", widht: "180px", borderRadius: "50%", boxShadow: "3px 3px 3px 3px #FAFAFA", }}>PROFILE DIV</div></div>
                <div class="grid-9">Marcos Mansur</div>
                <div class="grid-9">Developer Front End</div>
                <div class="skillsButton">
                    <button class="stylesButton">JAVASCRIPT</button>
                    <button class="stylesButton">REACT-NATIVE</button>
                </div>
            </div>
            <div  style={{backgroundColor: "#837fb1", marginTop: "90px"}} class="container">

                <div  style={{backgroundColor: "#837fb1"}} class="skillsButton">
                    <button class="stylesButton">JAVASCRIPT</button>
                    <button class="stylesButton">REACT-NATIVE</button>
                </div>
            </div>
            <div  style={{backgroundColor: "#837fb1"}} class="container">

                <div  style={{backgroundColor: "#837fb1"}} class="skillsButton">
                    <button  class="stylesButton">JAVASCRIPT</button>
                    <button class="stylesButton">REACT-NATIVE</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
