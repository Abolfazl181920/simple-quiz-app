import React, {useState} from 'react';
import './App.css';

const App = () => {

  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
	];

	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			alert(score);
		}
	}

  return (
    <div className="App">
		{
			showScore ? <div className="ShowScore">
				<div className="ShowScoreBody"><p>You answered {score} questions</p></div>
			</div> : (
				<div className="BodySection">
          			<div className="Question">{questions[0].questionText}</div>
          			<div className="Button">
            			{questions[0].answerOptions.map((answerOption) => {
              			return <button onClick={() => handleOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            		})}
          		</div>
        	</div>
			)
		}
    </div>
  );
}

export default App;