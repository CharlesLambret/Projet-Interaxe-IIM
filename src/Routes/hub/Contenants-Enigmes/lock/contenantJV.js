 import "../../hub.css";

export default function JVLock (){
    const imgJVLock= require("../../../../img/jvlock.png")
    return(
        <div id="contenantJV" class="contenantgauche" >
                    <img class="iconeetape" src={imgJVLock}/>
                    <div class="colonnetexte ">
                        <h2>Jeux Vidéo</h2>
                        <p>Détruis le virus</p>
                    </div>
                </div>
    )
}