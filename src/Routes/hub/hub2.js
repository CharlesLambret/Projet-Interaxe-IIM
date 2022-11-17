import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComNeutral from "./Contenants-Enigmes/Neutral/contenantCom";
import CreaLock from "./Contenants-Enigmes/lock/contenantCrea";
import DevLock from "./Contenants-Enigmes/lock/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";


const Carte2= require("../../img/Carte2.png");


export default function Hub2(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte2} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DUnlock/>
                <ComNeutral/>
                <CreaLock/>
                <DevLock/>
                <JVLock/>
            </div>
        </div>
    )
}