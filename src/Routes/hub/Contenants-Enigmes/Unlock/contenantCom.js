import "../../hub.css";

export default function ComUnlock (){
    const imgComUnlock = require("../../../../img/com-unlock.png");
    return(
        <div id="contenantCom" class="contenantdroite">
                    <img class="iconeetape " src={imgComUnlock}/>
                    <div class="colonnetexte ">
                        <h2>Communication Digitale </h2>
                        <p>Insère des identifiants</p>
                    </div>
        </div>
    )
}