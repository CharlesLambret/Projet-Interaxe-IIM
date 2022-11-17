import { useNavigate } from "react-router-dom";
import "./iim.css";
import * as React from 'react';

const ScreenIIM = require("../../img/screenIIM.png");
const BigLock = require("../../img/biglock.png");

export default function IIMCorrupt () {
    const Navigate = useNavigate();
    function handleClick () { Navigate('/hub')};
    return ( 
        <div id="containerscreen">
            <div class="Messagehacker">
                <img src={BigLock} id="biglock"/>
                <h1>ERROR - IIMscape</h1>
                <p>Temps de jeu estimé : 10min <br/>
                Nombre de joueur : 1 - 3</p>
                <p>Le site internet de l’IIM est hacké, tu incarnes un hacker qui est missionné pour débloquer toute l'école avant la JPO. Pour ce faire tu devras récupérer des indices et résoudre des énigmes laissées par le hacker. Au fil des étapes et des victoires, tu completeras ta carte étudiante qui te permettras de rentrer dans l'école et de la débloquer. Chaque axe correspond à une partie de la carte étudiante.</p>
                <button onClick={handleClick}>Clique ici pour commencer le jeu</button> 
            </div>
            <img src={ScreenIIM} class="PageIIM"/>
        </div>
    )
}
