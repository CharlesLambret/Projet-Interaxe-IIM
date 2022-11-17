import "../../hub.css";
import {useNavigate} from "react-router-dom";

export default function CreaNeutral (){
    let navigate = useNavigate();
    function RedirectCrea(){ navigate("/crea-design", { replace: true })};
    const imgDesignNeutral = require("../../../../img/creaneutral.png")
    return(
        <div id="contenantDesign" class="contenantgauche" onClick={RedirectCrea} >
                    <img class="iconeetape active" src={imgDesignNeutral}/>
                    <div class="colonnetexte active">
                        <h2>Création Design</h2>
                        <p>Reproduis le graphisme</p>
                    </div>
                </div>
    )
}