import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initinalValue) => {
  const [value, setValue] = useState(initinalValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Ms.");
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* {...name : 스프레드 연산자} */}
      {/* value={name.value} onChange.{name.onChange} 은 {...name}과 같은 의미다 */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
