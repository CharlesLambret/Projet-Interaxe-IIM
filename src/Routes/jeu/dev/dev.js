import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "../jeu.css";

export default function Dev(props){
    const DevNeutral = require("../../../img/devneutral.png");
    const DevUnlock = require("../../../img/dev-unlock.png");
    let CodeFront = require('../../../img/front.jpg');
    let CodeBack = require('../../../img/back.jpg');
    const questions = [
		{
			questionText: 'Pour enregistrer les identifiants sur la puce de la carte, tu as besoin de les sauvegarder dans un tableau. Mais une erreur se produit, trouve celle que tu dois débugguer !',
			answerOptions: [
				{ answerText: 'Le schéma est mal déclaré', isCorrect: false },
				{ answerText: 'La variable est mal déclarée', isCorrect: false },
				{ answerText: 'Le prénom renseigné est incorrect', isCorrect: true },
			],
            illustration : {CodeBack},
		},
		{
			questionText: 'Pour que la puce puisse afficher quelque chose si elle est scannée tu implémentes les données dans une interface. Une erreur se produit de nouveau, mais laquelle ? ',
			answerOptions: [
				{ answerText: "Une des balises pas fermée  ", isCorrect: true },
				{ answerText: "Il manque une balise dans l'html", isCorrect: false },
				{ answerText: 'Le script est incorrect', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [showerror, setShowError] = useState(false);
    const [showBack, setShowBack] = useState(true);
    const [showFront,setShowFront] = useState(false);
    const [showNeutral,setShowNeutral] = useState(true);
    const [showUnlock, setShowUnlock] = useState(false);
  

    let navigate = useNavigate()
    function RedirectHub(){ 
        navigate("/hub5", { replace: true });

    };
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
            setShowError(false);
			setScore(score + 1);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setShowFront(true);
                setShowBack(false);

            } else {
                setShowScore(true)
                setShowUnlock(true)
                setShowNeutral(false)
            }
		}
        else {

            setShowError(true);
        }
       
		
	};
	return (
		<div class="ContenantEnigme">
            {
                showNeutral?<img class="iconeetape"src={DevNeutral}/>:null
            }
            {
                showUnlock?<img class="iconeetape"src={DevUnlock}/>:null
            }
			{showScore ? (
				<div className='score-section' class="finetape">
					<p>Félicitations tu as terminé cette étape ! </p>
                    <button class="bouton" onClick={RedirectHub}>Clique ici pour retourner au hub</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
						</div>
                        <div className='question-text'><h3>{questions[currentQuestion].questionText}</h3></div>
                        {
                            showBack? <img src={CodeBack}/> : null
                        }
                        {
                            showFront?  <img src={CodeFront}/> :null
                        }
					</div>
					<div className='answer-section' class="sectionreponse">
                     
                        {
                            showerror?<p>Mauvaise réponse !</p>:null
                        }
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class="bouton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>
				</>
			)}
		</div>
	);
}