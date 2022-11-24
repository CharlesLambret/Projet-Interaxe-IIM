import "../../hub.css";

export default function CreaLock (){
    const imgDesignLock = require("../../../../img/creadesignlock.png")
    return(
        <div id="contenantDesign" class="contenantgauche" >
                    <img class="iconeetape " src={imgDesignLock}/>
                    <div class="colonnetexte ">
                        <h2>Création Design</h2>
                        <p>Reproduis le graphisme</p>
                    </div>
                </div>
    )
}