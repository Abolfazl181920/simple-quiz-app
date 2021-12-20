import React from 'react';

const App = () => {

  return (
    <div className="App">
        <div className="bg-indigo-600 h-screen w-full">
          <div>What is the capital of Germany?</div>
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