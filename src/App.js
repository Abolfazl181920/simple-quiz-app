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

	const [showScore, setShowScore] = useState(true);


  return (
    <div className="App">
		{showScore ? <div className="ShowScore"></div> : null}
        <div className="BodySection">
          <div className="Question">{questions[0].questionText}</div>
          <div className="Button">
            {questions[0].answerOptions.map((answerOption) => {
              return <button>{answerOption.answerText}</button>
            })}
          </div>
        </div>
    </div>
  );
}

export default App;