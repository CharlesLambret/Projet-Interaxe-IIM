import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComNeutral from "./Contenants-Enigmes/Neutral/contenantCom";
import CreaLock from "./Contenants-Enigmes/lock/contenantCrea";
import DevLock from "./Contenants-Enigmes/lock/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";
import {useState} from "react";

const Carte2= require("../../img/Carte2.png");


export default function Hub2(Dev){
    const [progression, setProgression] = useState(true);
    function closeModal(){
        setProgression(false);
    }
    return(
        <div class="contenantgeneral">
            {
            progression?
            <div class="modaleprogression" id="modaleprogression">
                <p>Félicitations ! Tu as détruit le premier pare-feu : 3D. Il t’en reste encore 4. Bonne chance !</p>
                <button class="bouton" onClick={closeModal}>Continuer</button>
            </div>
            :null
            }
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