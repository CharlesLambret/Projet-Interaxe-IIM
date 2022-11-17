import { useNavigate } from "react-router-dom";

export default function Section3DUnlock (){
    const imgTroisDUnlock= require("../../../../img/3D-unlock.png");
    return(
        <div id="contenant3D" class="contenantgauche">
                    <img class="iconeetape " src={imgTroisDUnlock}/>
                    <div class="colonnetexte ">
                        <h2>3D</h2>
                        <p>Crée ton avatar</p>
                    </div>
        </div>
    )
}