import "../../hub.css";

export default function DevLock (){
    const imgDevLock = require("../../../../img/devlock.png")
    return(
        <div id="contenantDev" class="contenantdroite">
                    <img class="iconeetape " src={imgDevLock}/>
                    <div class="colonnetexte ">
                        <h2>Développement</h2>
                        <p>Résous les bugs</p>
                    </div>
                </div>
    )
}