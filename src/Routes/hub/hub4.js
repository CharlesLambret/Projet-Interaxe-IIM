import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevNeutral from "./Contenants-Enigmes/Neutral/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";


const Carte4= require("../../img/Carte4.png");


export default function Hub4(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte4} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DUnlock/>
                <ComUnlock/>
                <CreaUnlock/>
                <DevNeutral/>
                <JVLock/>
            </div>
        </div>
    )
}