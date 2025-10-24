import React from 'react';
import Greeting from './Greetings';  
function App() {
  const name = "John"; 
  const age = 30;       

  return (
    <div>
      <h1>Welcome to the React App!</h1>
      
      <Greeting name={name} userAge={age} /> 
    </div>
  );
}

export default App;
