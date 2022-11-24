import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevUnlock from "./Contenants-Enigmes/Unlock/contenantDev";
import JVNeutral from "./Contenants-Enigmes/Neutral/contenantJV";
import {useState} from "react";

const Carte5= require("../../img/Carte5.png");


export default function Hub5(Dev){
    const [progression, setProgression] = useState(true);
    function closeModal(){
        setProgression(false);
    }
    return(
        <div class="contenantgeneral">
            {
            progression?
            <div class="modaleprogression" id="modaleprogression">
                <p>Félicitations ! Tu as détruit le quatrième pare-feu : Développement. Il t’en reste encore 1. Bonne chance !</p>
                <button class="bouton" onClick={closeModal}>Continuer</button>
            </div>
            :null
            }
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