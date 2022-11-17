import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaNeutral from "./Contenants-Enigmes/Neutral/contenantCrea";
import DevLock from "./Contenants-Enigmes/lock/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";


const Carte3= require("../../img/Carte3.png");


export default function Hub3(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte3} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DUnlock/>
                <ComUnlock/>
                <CreaNeutral/>
                <DevLock/>
                <JVLock/>
            </div>
        </div>
    )
}