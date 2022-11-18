import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import Section3DUnlock from "./Contenants-Enigmes/Unlock/contenant3D";
import ComUnlock from "./Contenants-Enigmes/Unlock/contenantCom";
import CreaUnlock from "./Contenants-Enigmes/Unlock/contenantCrea";
import DevUnlock from "./Contenants-Enigmes/Unlock/contenantDev";
import JVUnlock from "./Contenants-Enigmes/Unlock/contenantJV";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Carte6= require("../../img/Carte6.png");


export default function Hub6(Dev){
    let navigate = useNavigate();
    function SiteIIM (){navigate("iim.fr", { replace: true })};
    let Unlock = require("../../img/bigunlock.png");
    const [progression, setProgression] = useState(true);
    function closeModal(){
        setProgression(false);
    }
    return(
        <div class="contenantgeneral">
            {
            progression?
            <div class="modaleprogression" id="modalefinale">
                <img class="iconeetape" src={Unlock}/>
                <p>Félicitations ! Tu as détruit le cinquième pare-feu : Jeux-vidéo !</p> 
                <p>Tu as apprécié ce jeu et souhaite en savoir plus sur l'IIM et ses différents axes ? Alors pense à visiter le site de l'école !</p>
                <button class ="bouton" id="boutonfin" ><a href="iim.fr">Clique ici pour découvrir le site de l'IIM</a></button>
            </div>
            :
                <div class="Section1">
                    <img src={Carte6} class="studentcard"/>
                    <BoutonScenar/>
                </div>
            }
            
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