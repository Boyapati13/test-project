import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [value, updateValue] = useState();
  const [arrayValues, updateArrayValues] = useState([]);
  const [result, updateResult] = useState([]);

  const onChange = (value, key) => {
    arrayValues[key] = value;
    console.log(arrayValues);
    updateArrayValues(arrayValues);
  };
  const updateValues = (value) => {
    updateValue(value);
    for (var i = 0; i < value; i++) {
      arrayValues.push("");
    }
    updateArrayValues(arrayValues);
  };

  const arrangeInAscending = () => {
    updateResult(arrayValues.sort());
  };

  const arrangeInDescending = () => {
    updateResult(arrayValues.sort().reverse());
  };

  return (
    <div>
      <div> Enter a number </div>
      <input type="number" onChange={(e) => updateValues(e.target.value)} />
      <div>
        {value &&
          arrayValues.length > 0 &&
          arrayValues?.map((val, key) => (
            <input
              class="input"
              key={key}
              type="number"
              onChange={(e) => onChange(e.target.value, key)}
            />
          ))}
      </div>
      {value && (
        <>
          <div> Arrange either in ascending or decending </div>
          <button onClick={() => arrangeInAscending()}> Ascending </button>
          <button onClick={() => arrangeInDescending()}> Descending </button>
        </>
      )}
      {result && <div> {result}</div>}
    </div>
  );
}
