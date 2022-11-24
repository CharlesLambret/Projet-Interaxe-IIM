import "../../hub.css";

export default function CreaUnlock (){
    const imgDesignUnlock = require("../../../../img/crea-design-unlock.png")
    return(
        <div id="contenantDesign" class="contenantgauche" >
                    <img class="iconeetape " src={imgDesignUnlock}/>
                    <div class="colonnetexte ">
                        <h2>Création Design</h2>
                        <p>Reproduis le graphisme</p>
                    </div>
                </div>
    )
}