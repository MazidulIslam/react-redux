// App.js
import React from "react";
import Counter from "./components/Counter";

// state - count:0
// action - increment, decrement, reset
// reducer - Logic handle for update states 


const App = () => {
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  // };

  // const handleReset = () => {
  //   setCount(0);
  // };

  // const handleDecrement = () => {
  //   setCount((count) => count - 1);
  // };

  return (
    // <div>
    //   <h1>React Redux Example</h1>
    //   <h2>Count : {count}</h2>
    //   <button onClick={handleIncrement}>Increment</button>
    //   <button onClick={handleReset}>Reset</button>
    //   <button onClick={handleDecrement}>Decrement</button>
    // </div>

    <div className="App">
      <h1>React Redux Counter App</h1>
      <Counter />
    </div>
    
  );
};

export default App;