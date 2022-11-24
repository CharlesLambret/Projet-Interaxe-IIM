import { useNavigate } from "react-router-dom";

export default function Section3DNeutral (){
    let navigate = useNavigate();
    function Redirect3D (){ navigate("/3D", { replace: true })};
    const imgTroisDNeutral= require("../../../../img/3Dlock.png");
    return(
        <div id="contenant3D" class="contenantgauche" onClick={Redirect3D}>
                    <img class="iconeetape active" src={imgTroisDNeutral}/>
                    <div class="colonnetexte active">
                        <h2>3D</h2>
                        <p>Crée ton avatar</p>
                    </div>
        </div>
    )
}