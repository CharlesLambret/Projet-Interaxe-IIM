import "./hub.css";
import BoutonScenar from "../../Composants/boutonscenar/boutoninfoscenar";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Dev from "../jeu/dev/dev";
import ContexteAvancement  from "./Avancement/avancement";

const Carte1= require("../../img/Carte1.png");
const TroisDLock= require("../../img/3Dlock.png");
const ComLock = require("../../img/comdigitalelock.png");
const DesignLock = require("../../img/creadesignlock.png");
const DevLock = require("../../img/devlock.png");
const JVLock = require("../../img/jvlock.png");

const DevUnlock = require("../../img/dev-unlock.png")
export default function Hub(Dev){

    const [avancement] = useState(0);
    const [showUnlockDev, setshowUnlockDev] = useState(false);
    let navigate = useNavigate();
    function Redirect3D (){ navigate("/3D", { replace: true })};
    function RedirectCom(){ navigate("/communication", { replace: true })};
    function RedirectJV(){ navigate("/jeu-video", { replace: true })};
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
                    <img class="iconeetape" src={TroisDLock}/>
                    <div class="colonnetexte">
                        <h2>3D</h2>
                        <p>Crée ton avatar</p>
                    </div>
                </div>
                <div id="contenantCom" class="contenantdroite" onClick={RedirectCom}>
                    <img class="iconeetape" src={ComLock}/>
                    <div class="colonnetexte">
                        <h2>Communication Digitale </h2>
                        <p>Insère des identifiants</p>
                    </div>
                </div>
                <div id="contenantDesign" class="contenantgauche" onClick={RedirectCrea}>
                    <img class="iconeetape" src={DesignLock}/>
                    <div class="colonnetexte">
                        <h2>Création Design</h2>
                        <p>Reproduis le graphisme</p>
                    </div>
                </div>
                        <div id="contenantDev" class="contenantdroite">
                            <img class="iconeetape" src={DevUnlock}/>
                            <div class="colonnetexte">
                                <h2>Développement</h2>
                                <p>Tu as créé la puce de la carte !</p>
                            </div>
                        </div>
                        
                        <div id="contenantDev" class="contenantdroite" onClick={RedirectDev}>
                            <img class="iconeetape" src={DevLock}/>
                            <div class="colonnetexte">
                                <h2>Développement</h2>
                                <p>Résous les bugs</p>
                            </div>
                        </div>
                <div id="contenantJV" class="contenantgauche" onClick={RedirectJV}>
                    <img class="iconeetape" src={JVLock}/>
                    <div class="colonnetexte">
                        <h2>Jeux Vidéo</h2>
                        <p>Détruis le virus</p>
                    </div>
                </div>
            </div>

        </div>
    )
}