import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "../jeu.css";

export default function TroisD(){
    const TroisDNeutral = require("../../../img/3Dneutral.png");
    const TroisDUnlock = require("../../../img/3D-unlock.png");
    let ImagesGenerales = require("../../../img/avatars.png");
    const questions = [
		{
			questionText: 'Retrouve le bon avatar perdu dans la matrice. Depêche-toi le temps presse !',
			answerOptions: [
                { answerText: 'Avatar1', isCorrect: true, image: 'Avatar1' },
                { answerText: 'Avatar2', isCorrect: false, image: 'Avatar2' },
                { answerText: 'Avatar3', isCorrect: false, image: 'Avatar3' },
                { answerText: 'Avatar4', isCorrect: false, image: 'Avatar4' },
                { answerText: 'Avatar5', isCorrect: false, image: 'Avatar5' },
                { answerText: 'Avatar6', isCorrect: false, image: 'Avatar6' },
                { answerText: 'Avatar7', isCorrect: false, image: 'Avatar7' },
                { answerText: 'Avatar8', isCorrect: false, image: 'Avatar8' },
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
        navigate("/hub2", { replace: true });

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
                showNeutral?<img class="iconeetape"src={TroisDNeutral}/>:null
            }
            {
                showUnlock?<img class="iconeetape"src={TroisDUnlock}/>:null
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
                    
                    <p class="texteindice">J’aime la mode particulièrement et les bijoux. Je porte souvent des accessoires sur moi. J'adore porter mes lunettes de soleil en permanence : Qui-suis-je ?</p>
                    {
                            showerror?<p>Mauvaise réponse !</p>:null
                    }
					<div className='answer-section' class="sectionreponse reponseavatar">
						{questions[currentQuestion].answerOptions.map((answerOption) => (

                            <div class="colonneavatar" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                            <img class="petiteimage" src={require('../../../img/' + answerOption.image +'.png')}/>
							<button class="petitbouton" >{answerOption.answerText}</button>
                            </div>
						))}
                        
					</div>
				</>
			)}
		</div>
	);
}