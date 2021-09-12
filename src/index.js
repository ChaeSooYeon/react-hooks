import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initinalValue, validator) => {
  const [value, setValue] = useState(initinalValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => !value.includes("@"); //value.length <= 10;
  const name = useInput("Ms.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
