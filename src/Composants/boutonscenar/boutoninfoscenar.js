import * as React from 'react';
import { useState } from 'react';
import "./boutoninfoscenar.css";
import { Button, Box } from '@mui/material';
const Iconescenar = require("./iconeboutonscenario.png");

export default function BoutonScenar (){
    const [show,setShow]=useState(false);

    return(
        <div id="contenantscenario">
            <Button id="boutonscenar" onClick={()=>setShow(!show)}><img class="iconescenar" src={Iconescenar}/> </Button>
            {
            show?<Box id="rappel">
                <p class="textemodal"> Le site de l’IIM est hacké ! Débloque les pare-feux et crée ta carte étudiante pour rentrer dans l’IIM. Bon courage !</p>
            </Box>:null
            }
        </div>
        
    )
}
