import "../../hub.css";
import {useNavigate} from "react-router-dom";

export default function ComNeutral (){
    let navigate = useNavigate();
    function RedirectCom(){ navigate("/communication", { replace: true })};
    const imgComNeutral = require("../../../../img/comneutral.png");
    return(
        <div id="contenantCom" class="contenantdroite" onClick={RedirectCom}>
                    <img class="iconeetape active" src={imgComNeutral}/>
                    <div class="colonnetexte active">
                        <h2>Communication Digitale </h2>
                        <p>Insère des identifiants</p>
                    </div>
        </div>
    )
}