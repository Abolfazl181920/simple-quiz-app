import React from 'react';
import './App.css';

const App = () => {

  return (
    <div className="App">
        <div className="BodySection">
          <div className="Question">What is the capital of Germany?</div>
          <div>
            <input type='button' value='Tehran' />
            <input type='button' value='Tokyo' />
            <input type='button' value='Istanbul' />
            <input type='button' value='nothing' />
          </div>
        </div>
    </div>
  );
}

export default App;