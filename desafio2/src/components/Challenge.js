import React from "react";

const Challenge = () => {
  const x = 8;
  const y = 88;

  const sum = (a, b) =>{
    return <p> The sum of the two numbers is: {a+b}</p>
  }
  return (
    <div>
      <p>First Number: {x}</p>
      <p>Segund Number: {y}</p>
      {sum(x,y)}
      <button onClick={() => console.log(x+y)}>Retornar soma no console!</button>
      
    </div>
  );
};

export default Challenge;