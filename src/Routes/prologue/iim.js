import { useNavigate } from "react-router-dom";
import "./iim.css";
import * as React from 'react';

const ScreenIIM = require("../../img/screenIIM.png");

export default function IIM () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/corrupt", { replace: true })}, 3000);
    return ( 
        <div id="containerscreen">
            <img src={ScreenIIM} class="PageIIM"/>
        </div>
    )
}
