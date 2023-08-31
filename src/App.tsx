import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null | string>(null);

  const handleSum = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if (!isNaN(number1) && !isNaN(number2) && num1 !== "" && num2 !== "") {
      setResult(number1 + number2);
    } else {
      setResult("Both fields must be numeric values");
    }
  };
  

  return (
    <>
      <div className="app-main-div">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleSum}>Sum</button>
        {result !== null && <div>Result: {result}</div>}
      </div>
    </>
  );
}

export default App;
