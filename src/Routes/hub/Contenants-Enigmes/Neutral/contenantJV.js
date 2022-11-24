import { useNavigate } from "react-router-dom";
import "../../hub.css";

export default function JVNeutral (){
    let navigate = useNavigate();
    function RedirectJV(){navigate("/jeu-video", { replace: true })};
    const imgJVNeutral= require("../../../../img/jvneutral.png")
    return(
        <div id="contenantJV" class="contenantgauche" onClick={RedirectJV}>
                    <img class="iconeetape active" src={imgJVNeutral}/>
                    <div class="colonnetexte active">
                        <h2>Jeux Vidéo</h2>
                        <p>Détruis le virus</p>
                    </div>
                </div>
    )
}