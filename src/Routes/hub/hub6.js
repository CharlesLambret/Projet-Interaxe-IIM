import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevUnlock from "./Contenants-Enigmes/Unlock/contenantDev";
import JVUnlock from "./Contenants-Enigmes/Unlock/contenantJV";


const Carte6= require("../../img/Carte6.png");


export default function Hub6(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte6} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DUnlock/>
                <ComUnlock/>
                <CreaUnlock/>
                <DevUnlock/>
                <JVUnlock/>
            </div>
        </div>
    )
}