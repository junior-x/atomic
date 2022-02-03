import "./../styles/profileStyles.css"
function ProfileUser() {
    return (
        <div class="body">
            <div class="container">
                <div class="grid-3">Coluna de 3</div>
                <div class="grid-9">Coluna de 9</div>
                <div class="grid-9">Coluna de 9</div>
                <div class="skillsButton">
                    <button class={{ marginLeft: "30px" }}>JAVASCRIPT</button>
                    <button class={{ paddingLeft: "30px" }}>REACT-NATIVE</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
