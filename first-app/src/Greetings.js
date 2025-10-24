import React from 'react';
function Greeting(props) {  
  return (
    <div>
      <h2>Hello, {props.name}!</h2>  
      <p>You are {props.userAge} years old.</p>  
    </div>
  );
}
export default Greeting;
