import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Dev from "../jeu/dev/dev";

const Carte1= require("../../img/Carte1.png");
const TroisDLock= require("../../img/3Dlock.png");
const ComLock = require("../../img/comdigitalelock.png");
const DesignLock = require("../../img/creadesignlock.png");
const DevLock = require("../../img/devlock.png");
const JVLock = require("../../img/jvlock.png");

export default function Hub(Dev){

    const [avancement] = useState(0);
    let navigate = useNavigate();
    function Redirect3D (){ navigate("/3D", { replace: true })};
    function RedirectCom(){ navigate("/communication", { replace: true })};
    function RedirectJV(){ navigate("/jeu-vidéo", { replace: true })};
    function RedirectCrea(){ navigate("/crea-design", { replace: true })};
    function RedirectDev(){ navigate("/developpement", { replace: true })};


    return(
        <div class="contenantgeneral">
            <div class="Section1">
                <img src={Carte1} class="studentcard"/>
                <BoutonScenar/>
            </div>
            <div class="Contenantenigmes">
                <div id="contenant3D" class="contenantgauche" onClick={Redirect3D}>
                    <img class="iconelock" src={TroisDLock}/>
                    <div class="colonnetexte">
                        <h2>3D</h2>
                        <p>Crée ton avatar</p>
                    </div>
                </div>
                <div id="contenantCom" class="contenantdroite" onClick={RedirectCom}>
                    <img class="iconelock" src={ComLock}/>
                    <div class="colonnetexte">
                        <h2>Communication Digitale </h2>
                        <p>Insère des identifiants</p>
                    </div>
                </div>
                <div id="contenantDesign" class="contenantgauche" onClick={RedirectCrea}>
                    <img class="iconelock" src={DesignLock}/>
                    <div class="colonnetexte">
                        <h2>Création Design</h2>
                        <p>Reproduis le graphisme</p>
                    </div>
                </div>
                <div id="contenantDev" class="contenantdroite" onClick={RedirectDev}>
                    <img class="iconelock" src={DevLock}/>
                    <div class="colonnetexte">
                        <h2>Développement</h2>
                        <p>Résous les bugs</p>
                    </div>
                </div>
                <div id="contenantJV" class="contenantgauche" onClick={RedirectJV}>
                    <img class="iconelock" src={JVLock}/>
                    <div class="colonnetexte">
                        <h2>Jeux Vidéo</h2>
                        <p>Détruis le virus</p>
                    </div>
                </div>
            </div>

        </div>
    )
}