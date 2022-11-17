import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevUnlock from "./Contenants-Enigmes/Unlock/contenantDev";
import JVNeutral from "./Contenants-Enigmes/Neutral/contenantJV";


const Carte5= require("../../img/Carte5.png");


export default function Hub5(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte5} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DUnlock/>
                <ComUnlock/>
                <CreaUnlock/>
                <DevUnlock/>
                <JVNeutral/>
            </div>
        </div>
    )
}