import "../../hub.css";

export default function DevUnlock (){
    const imgDevUnlock = require("../../../../img/dev-unlock.png");
    return(
        <div id="contenantDev" class="contenantdroite">
                    <img class="iconeetape " src={imgDevUnlock}/>
                    <div class="colonnetexte ">
                        <h2>Développement</h2>
                        <p>Résous les bugs</p>
                    </div>
                </div>
    )
}