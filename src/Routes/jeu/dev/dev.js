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
			questionText: 'Pour enregistrer les identifiants précédemment obtenus on crée un tableau pour renseigner les données sur la puce. On récupère ensuite les valeurs de ce tableau avec la variable Tableau. Il y a une erreur à vous de la trouver !',
			answerOptions: [
				{ answerText: 'Le schéma est mal déclaré', isCorrect: false },
				{ answerText: 'La variable est mal déclarée', isCorrect: false },
				{ answerText: 'Le prénom renseigné est incorrect', isCorrect: true },
			],
            illustration : {CodeBack},
		},
		{
			questionText: 'Nous allons maintenant faire en sorte que si la puce est scannée quelque part, elle puisse afficher les données renseignées sur la carte grâce à de au langage HTML. Il y a de nouveau une erreur dans le code mais laquelle ? ',
			answerOptions: [
				{ answerText: 'La balise p n est pas fermée', isCorrect: true },
				{ answerText: 'Il manque une balise dans l html', isCorrect: false },
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
					<p>Félicitations vous avez terminé cette étape ! </p>
                    <button class="bouton" onClick={RedirectHub}>Cliquez ici pour retourner au hub</button>
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