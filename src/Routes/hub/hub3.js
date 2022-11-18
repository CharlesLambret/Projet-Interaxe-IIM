import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaNeutral from "./Contenants-Enigmes/Neutral/contenantCrea";
import DevLock from "./Contenants-Enigmes/lock/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";
import {useState} from "react";

const Carte3= require("../../img/Carte3.png");


export default function Hub3(Dev){
    const [progression, setProgression] = useState(true);
    function closeModal(){
        setProgression(false);
    }
    return(
        <div class="contenantgeneral">
            {
            progression?
            <div class="modaleprogression" id="modaleprogression">
                <p>Félicitations ! Tu as détruit le deuxième pare-feu : Communication Digitale. Il t’en reste encore 3. Bonne chance !</p>
                <button class="bouton" onClick={closeModal}>Continuer</button>
            </div>
            :null
            }
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