import React, {useState} from 'react';
import Info from './Info';

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
		{
			questionText: 'Who is CEO of Apple?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Steve Jobs', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Iran?',
			answerOptions: [
				{ answerText: 'Munich', isCorrect: false },
				{ answerText: 'Tehran', isCorrect: true },
				{ answerText: 'Baqdad', isCorrect: false },
				{ answerText: 'Mazandaran', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the best soccer player of portugal?',
			answerOptions: [
				{ answerText: 'Lionel Messi', isCorrect: false },
				{ answerText: 'Cristiano Ronaldo', isCorrect: true },
				{ answerText: 'Bernardo silva', isCorrect: false },
				{ answerText: 'Harry maguire', isCorrect: false },
			],
		},
	];

	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	const handleResetQuestions = () => {
		setShowScore(false);
		setScore(0);
		setCurrentQuestion(0);
	}

  return (
    <div className="App">
		{
			showScore ? <div className="ShowScore">
				<div className="ShowScoreBody"><p>You scored {score} out of {questions.length}</p></div>
				<button className="BackToQuestions" onClick={() => handleResetQuestions()}>back to questions</button>
				<Info />
			</div> : (
				<div className="BodySection">
          			<div className="Question">{questions[0].questionText}</div>
          			<div className="Button">
            			{questions[currentQuestion].answerOptions.map((answerOption) => {
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