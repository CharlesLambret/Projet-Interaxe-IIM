import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../jeu.css";

export default function JV () {
  
  let navigate = useNavigate()
  function RedirectHub(){ 
      navigate("/hub6", { replace: true });

  };

  const JVNeutral = require("../../../img/jvneutral.png")
  const JVUnlock = require("../../../img/jeuvideo-unlock.png")
  const [showScore, setShowScore] = useState(false);
  const [showNeutral,setShowNeutral] = useState(true);
  const [showUnlock, setShowUnlock] = useState(false);
  
  var gameEnd = useState(false);
  

  setTimeout((gameEnd) => {return true}, 180000);
  function handleAnswerOptionClick () {
            setShowScore(true);
            setShowNeutral(false);
            setShowUnlock(true)
          }


  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../../Build3/Build/Build3.loader.js",
    dataUrl: "../../../../Build3/Build/Build3.data",
    frameworkUrl: "../../../../Build3/Build/Build3.framework.js",
    codeUrl: "../../../../Build3/Build/Build3.wasm",
  });
  
  return (
    <div class="ContenantEnigme">
      {
        showNeutral?<img class="iconeetape"src={JVNeutral}/>:null
      }
      {
        showUnlock?<img class="iconeetape"src={JVUnlock}/>:null
      }
      {showScore ? (
				<div className='score-section' class="finetape">
					<p>Félicitations tu as terminé cette étape ! </p>
                    <button class="bouton" onClick={RedirectHub}>Clique ici pour retourner au hub</button>
				</div>
      ) : (
        <div class="contenujv">
        <h1>Enigme Jeu-Vidéo</h1>
        <Unity style={{width:1400, height: 600,}} unityProvider={unityProvider}/>
        {
          gameEnd?
            <div class="victoire">
              <p>Elimine les virus pour terminer la mission. Tu peux te déplacer avec ZQSD !</p>
              <button class="bouton" onClick={handleAnswerOptionClick}>Terminer la partie</button>
            </div>
            :null
        }
        </div>
      )
      }
    </div>
    );
}

