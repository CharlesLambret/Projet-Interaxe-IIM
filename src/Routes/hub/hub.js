import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DNeutral from "./Contenants-Enigmes/Neutral/contenant3D";
import ComLock from "./Contenants-Enigmes/lock/contenantCom";
import CreaLock from "./Contenants-Enigmes/lock/contenantCrea";
import DevLock from "./Contenants-Enigmes/lock/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";


const Carte1= require("../../img/Carte1.png");


export default function Hub(Dev){

    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte1} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <Section3DNeutral/>
                <ComLock/>
                <CreaLock/>
                <DevLock/>
                <JVLock/>
            </div>
        </div>
    )
}