import { useState } from 'react';



const ItemCount = () => {


  const [count, setCount] = useState(0);


  const [color, setColor] = useState("Verde");

  const changeToGreen = () => {
    setColor("Verde")
  };

  const changeToRed = () => {
    setColor("Rojo")
  };
  return (
    <div>
      <h1>soy el contador</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick= {changeToRed}>te cambio el boton a rojo</button>
      <button onclick={changeToGreen}>te cambio el boton a verde</button>
      <h2> estado actual del color : {color}</h2>
    </div>
  );
}

export default ItemCount;