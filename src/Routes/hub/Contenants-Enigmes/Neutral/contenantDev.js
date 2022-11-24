import "../../hub.css";
import {useNavigate} from "react-router-dom";

export default function DevNeutral (){
    let navigate = useNavigate();
    function RedirectDev(){ navigate("/developpement", { replace: true })};
    const imgDevNeutral = require("../../../../img/devneutral.png")
    return(
        <div id="contenantDev" class="contenantdroite" onClick={RedirectDev}>
                    <img class="iconeetape active" src={imgDevNeutral}/>
                    <div class="colonnetexte active">
                        <h2>Développement</h2>
                        <p>Résous les bugs</p>
                    </div>
                </div>
    )
}