import "../../hub.css";

export default function ComLock (){
    const imgComlock = require("../../../../img/comdigitalelock.png");
    return(
        <div id="contenantCom" class="contenantdroite">
                    <img class="iconeetape " src={imgComlock}/>
                    <div class="colonnetexte ">
                        <h2>Communication Digitale </h2>
                        <p>Insère des identifiants</p>
                    </div>
        </div>
    )
}