import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("--");

  const reset = () => {
    setCount(0);
    setText("--");
  };
  const inc = () => {
    setCount(count + 1);
    if ((count + 1) % 2 == 0) {
      setText(`${count + 1} çift sayıdır`);
    } else {
      setText(`${count + 1} tek sayıdır`);
    }
  };

  const dec = () => {
    setCount(count - 1);
    if ((count - 1) % 2 == 0) {
      setText(`${count - 1} çift sayıdır`);
    } else {
      setText(`${count - 1} tek sayıdır`);
    }
  };
  return (
    <div className="container text-center mt-5">
      <h1>Use State Hook</h1>
      <h2>{count}</h2>
      <h2>{text}</h2>
      {/* count 0 dan buyukse count-1 değilse 0 */}
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={inc}> +</button>
    </div>
  );
}

export default App;
