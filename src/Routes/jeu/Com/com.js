import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "../jeu.css";

export default function Com(){
    const ComNeutral = require("../../../img/comneutral.png");
    const ComUnlock = require("../../../img/com-unlock.png");
	const ImagesGenerales = require("../../../img/imagegeneralecom.png");
    const questions = [
		{
			questionText: 'Trouve le code secret pour générer de faux identifiants',
			answerOptions: [
				{ answerText: 'DEVINCI', isCorrect: true },
				{ answerText: 'DAAVINCI', isCorrect: false },
				{ answerText: 'DEVINCY', isCorrect: false },
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
        navigate("/hub3", { replace: true });

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
                showNeutral?<img class="iconeetape"src={ComNeutral}/>:null
            }
            {
                showUnlock?<img class="iconeetape"src={ComUnlock}/>:null
            }
			{showScore ? (
				<div className='score-section' class="finetape">
					<p>Félicitations tu as terminé cette étape ! Ta fausse identité est <span>Noemie Tourolle</span> </p>
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
					<div className='answer-section' class="sectionreponse">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class="bouton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>
				</>
			)}
		</div>
	);
}