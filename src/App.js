import "./App.css";
import { useState, useEffect } from "react";
const App = () => {
  const [advise, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>
        Today's advice is <q>{advise}</q>
      </p>
      <button onClick={getAdvice}>Get advice</button>
      <p>
        You have read <b>{count}</b> pieces of advice
      </p>
    </div>
  );
};

export default App;
