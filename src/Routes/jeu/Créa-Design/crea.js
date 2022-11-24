import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "../jeu.css";

export default function Crea(){
    const CreaNeutral = require("../../../img/creaneutral.png");
    const CreaUnlock = require("../../../img/crea-design-unlock.png");
	const ImagesGenerales = require("../../../img/loopenigmedesign.gif");
    const questions = [
		{
			questionText: 'Ajoute des couleurs à ta carte pour la rendre plus véridique. Ne te laisse pas avoir par l’effet hypnotique de cette enigme !',
			answerOptions: [
                { answerText: 'EA7F01', isCorrect: false },
                { answerText: 'EE7F01', isCorrect: true },
                { answerText: 'EE7FO1', isCorrect: false },
                { answerText: 'EE7F04', isCorrect: false },
            ]
        }
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [showerror, setShowError] = useState(false);
    const [showNeutral,setShowNeutral] = useState(true);
    const [showUnlock, setShowUnlock] = useState(false);
  

    let navigate = useNavigate()
    function RedirectHub(){ 
        navigate("/hub4", { replace: true });

    };
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
            setShowError(false);
			setScore(score + 1);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                

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
                showNeutral?<img class="iconeetape"src={CreaNeutral}/>:null
            }
            {
                showUnlock?<img class="iconeetape"src={CreaUnlock}/>:null
            }
			{showScore ? (
				<div className='score-section' class="finetape">
					<p>Félicitations tu as terminé cette étape ! </p>
                    <button class="bouton" onClick={RedirectHub}>Clique ici pour retourner au hub</button>
				</div>
			) : (
				<>
					<div className='question-section'>
                        <div className='question-text'><h3 id="texteavatar">{questions[currentQuestion].questionText}</h3></div>
                        <img src={ImagesGenerales}/>
					</div>
                    {
                            showerror?<p>Mauvaise réponse !</p>:null
                    }
					<div className='answer-section' class="sectionreponse reponseavatar">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class="bouton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>
				</>
			)}
		</div>
	);
}