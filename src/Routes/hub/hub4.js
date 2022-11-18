import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevNeutral from "./Contenants-Enigmes/Neutral/contenantDev";
import JVLock from "./Contenants-Enigmes/lock/contenantJV";
import {useState} from "react";

const Carte4= require("../../img/Carte4.png");


export default function Hub4(Dev){
    const [progression, setProgression] = useState(true);
    function closeModal(){
        setProgression(false);
    }
    return(
        <div class="contenantgeneral">
            {
            progression?
            <div class="modaleprogression" id="modaleprogression">
                <p>Félicitations ! Tu as détruit le troisième pare-feu : Création Design. Il t’en reste encore 2. Bonne chance !</p>
                <button class="bouton" onClick={closeModal}>Continuer</button>
            </div>
            :null
            }
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