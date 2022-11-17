 import "../../hub.css";

export default function JVUnlock (){
    const imgJVUnlock= require("../../../../img/jeuvideo-unlock.png")
    return(
        <div id="contenantJV" class="contenantgauche" >
                    <img class="iconeetape" src={imgJVUnlock}/>
                    <div class="colonnetexte ">
                        <h2>Jeux Vidéo</h2>
                        <p>Détruis le virus</p>
                    </div>
                </div>
    )
}